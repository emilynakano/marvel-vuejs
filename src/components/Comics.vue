<script setup lang="ts">
import type { IComic } from "@/interfaces/Comic";
import { ProgressiveImage } from "vue-progressive-image";

interface Props {
  data: IComic[] | null;
}

const { data } = defineProps<Props>();

const comics = data;

const comicsExist = comics && comics.length > 0;
</script>
<template>
  <h1 v-if="comicsExist">COMICS</h1>
  <div v-if="comicsExist" class="container">
    <div v-for="comic in comics" :key="comic.id" class="comic">
      <ProgressiveImage
        placeholder-src="http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4ce5a37a830a3.jpg"
        object-cover
        class="img"
        :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
      />
      <h2>
        {{ comic.title.split("#")[0] }}
      </h2>
    </div>
  </div>
</template>
<style scoped lang="css">
.container {
  position: relative;
  margin-top: 25px;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 25px;
}

.comic {
  z-index: -10;
  width: 160px;
  height: 300px;
  border-radius: 25px;
  border: solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.comic .img {
  width: 154px;
  height: 240px;
}

h2 {
  padding: 20px 0;
  text-align: center;
  width: calc(100% - 10px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h1 {
  margin-top: 25px;
  font-weight: bold;
  padding: 0 25px;
  font-size: 20px;
}
</style>
