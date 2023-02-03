<script setup lang="ts">
import type { IComic } from "@/interfaces/Comic";

interface Props {
  data: IComic[] | null;
}

const { data } = defineProps<Props>();
</script>
<template>
  <div v-for="comic in data" :key="comic.id">
    <h1>
      {{ comic.name }}
    </h1>
  </div>
</template>
<style scoped lang="css"></style>
