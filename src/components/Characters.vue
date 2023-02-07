<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRouter } from "vue-router";

import { ProgressiveImage } from "vue-progressive-image";

import { getAllCharacters } from "@/services/charactersService";
import infiniteScroll from "@/utils/infiniteScroll";
import getProportionalWidth from "@/utils/getProportionalWidth";

import type { ICharacter } from "@/interfaces/Character";

const router = useRouter();

// to use in the css
const widthCharacter = getProportionalWidth(160);

const currentPage = ref(0);
const characters = ref<ICharacter[] | []>([]);

interface IProps {
  dataSearch: ICharacter[] | null;
}

const dataSearch = ref<ICharacter[] | null>(null);
const props = defineProps<IProps>();

onUpdated(async () => {
  dataSearch.value = props.dataSearch;
});

watch(dataSearch, async () => {
  if (dataSearch.value) {
    characters.value = dataSearch.value;
  } else {
    const data = await getAllCharacters(0);
    characters.value = data;
  }
});

watch(currentPage, async () => {
  const newData = await getAllCharacters(currentPage.value);
  characters.value = [...characters.value, ...newData];

  localStorage.setItem("currPage@MARVEL", JSON.stringify(currentPage.value));
});

watch(characters, async () => {
  // not cache data from search to evit bugs
  if (dataSearch.value) {
    return;
  }

  // cache data from api to not unnecessary re render
  characters.value &&
    localStorage.setItem("data@MARVEL", JSON.stringify(characters.value));
});

onMounted(async () => {
  infiniteScroll({ currentPage: currentPage, increment: 25 });

  // verify if data is chached
  let data = localStorage.getItem("data@MARVEL");
  let indexPage = localStorage.getItem("currPage@MARVEL");
  if (data && indexPage) {
    characters.value = JSON.parse(data);
    currentPage.value = Number(JSON.parse(indexPage));
  } else {
    const dataCharacters = await getAllCharacters(0);
    characters.value = dataCharacters;
  }
});
</script>
<template>
  <div class="container" v-if="characters">
    <div
      v-for="character in characters"
      :key="character.id"
      class="character fadeInUpBig"
      @click="router.push('details/character/' + character.id)"
    >
      <div class="transition">
        <div class="img-overflow">
          <ProgressiveImage
            placeholder-src="http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4ce5a37a830a3.jpg"
            object-cover
            class="img"
            :src="
              character.thumbnail.path + '.' + character.thumbnail.extension
            "
          />
        </div>

        <div class="row"></div>
        <div class="content">
          <h1>{{ character.name.split("(")[0] }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="css">
.container {
  padding-left: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

.character {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;

  width: v-bind(widthCharacter);
  background-color: var(--background);
  border-bottom-right-radius: 20px;

  overflow: hidden;
}

.row {
  widows: 100%;
  height: 4px;
  background-color: var(--details);
}

.img-overflow {
  background-size: contain;

  overflow: hidden;
  width: v-bind(widthCharacter);
  height: 200px;
  object-fit: cover;
}
.img {
  width: v-bind(widthCharacter);
  height: 200px;
  object-fit: cover;
  background-size: contain;
}

.content {
  font-size: 15px;
  padding: 25px 20px;
}

h1 {
  font-size: 15px;
  font-weight: bold;
  color: var(--text-light);
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
}

.transition {
  background: linear-gradient(
    var(--background),
    #252525 50%,
    rgb(219, 45, 45) 50%,
    var(--details)
  );
  background-size: 100% 200%;
  transition: background 0.7s;
}

.transition:hover {
  cursor: pointer;
  background-position: 100% 100%;
}

.transition:hover .img {
  transform: scale(1.1);
}
</style>
