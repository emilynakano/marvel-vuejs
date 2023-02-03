<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import { useRouter } from "vue-router";

import { getAllCharacters } from "@/services/charactersService";
import infiniteScroll from "@/utils/infiniteScroll";

import type { ICharacter } from "@/interfaces/Character";

const router = useRouter();

const currentPage = ref(0);
const characters = ref<ICharacter[] | []>([]);

onMounted(async () => {
  const data = await getAllCharacters(0);
  characters.value = data.filter(
    (c: ICharacter) => !c.thumbnail.path.includes("image_not_available")
  );
});

watch(currentPage, async () => {
  const newData = await getAllCharacters(currentPage.value);
  characters.value = [
    ...characters.value,
    ...newData.filter(
      (c: ICharacter) => !c.thumbnail.path.includes("image_not_available")
    ),
  ];
});

onMounted(async () => {
  infiniteScroll({ currentPage: currentPage, increment: 25 });
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
          <img
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.character {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;

  width: 160px;
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
  overflow: hidden;
  width: 160px;
  height: 200px;
}
img {
  width: 160px;
  height: 200px;
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

.transition:hover img {
  transform: scale(1.1);
}
</style>
