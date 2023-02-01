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
  characters.value = data;
});
</script>
<template>
  <main v-if="characters">
    <div v-for="character in characters" :key="character.id" class="character">
      <div class="character">
        <h1>{{ character.name }}</h1>
        <img
          :src="character.thumbnail.path + '.' + character.thumbnail.extension"
          alt=""
        />
      </div>
    </div>
  </main>
</template>
