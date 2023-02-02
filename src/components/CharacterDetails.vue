<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TrinityRingsSpinner } from "epic-spinners";

import {
  getCharacterById,
  getCharacterMovies,
} from "@/services/charactersService";

import type { ICharacter } from "@/interfaces/Character";
import Biography from "./Biography.vue";

const { id } = defineProps({
  id: { type: Number, default: 0 },
});

const character = ref<ICharacter | null>(null);
const movies = ref(null);
onMounted(async () => {
  const dataCharacter = await getCharacterById(id);
  const dataMovies = await getCharacterMovies(id);
  character.value = dataCharacter;
  movies.value = dataMovies;
});
console.log(movies);
</script>
<template>
  <div class="container" v-if="character">
    <div class="main">
      <img
        :src="character.thumbnail.path + '.' + character.thumbnail.extension"
        alt="img"
      />
      <div class="name">
        <h1>{{ character.name }}</h1>
      </div>
      <div class="row" />
    </div>
    <div class="mobile-title">
      <h1>{{ character.name }}</h1>
    </div>
    <Biography :description="character.description" />
  </div>

  <div v-else class="spinner">
    <trinity-rings-spinner
      :animation-duration="1500"
      :size="66"
      color="rgb(197, 12, 12)"
    />
  </div>
</template>
<style scoped lang="css">
.main {
  position: relative;
  height: 350px;
  width: 100%;
  background-color: rgb(10, 10, 10);
  display: flex;
  flex-direction: row;
  gap: 3px;
  padding-left: 25px;
}

.main img {
  height: 350px;
  width: 300px;
}

.main .name {
  margin-left: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: var(--text-light);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
}
.row {
  right: 0;
  bottom: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0px 100px 100px;
  border-color: transparent transparent var(--background-light) transparent;
}

.spinner {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-title {
  display: none;
}
@media screen and (max-width: 650px) {
  .main {
    align-items: center;
    justify-content: center;
    padding-left: 0px;
  }
  .main .name {
    display: none;
  }
  .mobile-title {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-top: 25px;
  }
  h1 {
    color: black;
  }
}
</style>
