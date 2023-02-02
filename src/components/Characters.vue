<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAllCharacters } from "@/services/charactersService";

interface ICharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const characters = ref<ICharacter[] | []>([]);
onMounted(async () => {
  const data = await getAllCharacters(0);
  characters.value = data.filter(
    (c: ICharacter) => !c.thumbnail.path.includes("image_not_available")
  );
});
</script>
<template>
  <main v-if="characters">
    <div v-for="character in characters" :key="character.id" class="character">
      <div class="character transition">
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
  </main>
</template>
<style lang="css">
main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.character {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;

  width: 160px;
  background-color: #1b1b1b;
  border-bottom-right-radius: 20px;

  overflow: hidden;
}

.row {
  widows: 100%;
  height: 4px;
  background-color: rgb(197, 12, 12);
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
  font-weight: 800;
  color: white;
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
}

.transition {
  background: linear-gradient(
    #1b1b1b,
    #252525 50%,
    rgb(219, 45, 45) 50%,
    rgb(197, 12, 12)
  );
  background-size: 100% 200%;
  transition: background 0.7s;
  z-index: 1;
}

.transition:hover {
  cursor: pointer;
  background-position: 100% 100%;
}

.transition:hover img {
  transform: scale(1.1);
}
</style>
