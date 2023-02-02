<script setup lang="ts">
import { useRoute } from "vue-router";

import Header from "@/components/Header.vue";
import CharacterDetails from "@/components/CharacterDetails.vue";

const { params } = useRoute();
const id = Number(params.id);
</script>
<template>
  <Header />
  <main>
    <CharacterDetails :id="id" />
  </main>
</template>
<style scoped lang="css">
main {
  padding: 75px 0 20px 0;
  background-color: var(--background-light);
}
</style>
