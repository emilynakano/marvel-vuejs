<script setup lang="ts">
import { useRoute } from "vue-router";

import { Header, CharacterDetails } from "@/components";

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
  padding: 60px 0 20px 0;
}
</style>
