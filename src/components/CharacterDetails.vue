<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TrinityRingsSpinner } from "epic-spinners";

import { getCharacterById } from "@/services/charactersService";

import type { ICharacter } from "@/interfaces/Character";

const { id } = defineProps({
  id: { type: Number, default: 0 },
});

const character = ref<ICharacter | null>(null);
onMounted(async () => {
  const data = await getCharacterById(id);
  character.value = data;
});
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
    </div>
    <div class="box"></div>
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

.main .name h1 {
  color: var(--text-light);
  text-transform: uppercase;
  font-size: 24px;
}
.box {
  right: 0;
  margin-top: -90px;
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
</style>
