<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAllCharacters } from "@/services/charactersService";

const characters = ref([]);
onMounted(async () => {
  const data = await getAllCharacters(0);
  characters.value = data;
});
</script>
<template>
  <main>
    <h1 v-if="characters">{{ characters }}</h1>
  </main>
</template>
