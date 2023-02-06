<script setup lang="ts">
import { ref } from "vue";

import { TrinityRingsSpinner } from "epic-spinners";

import { Header, Search, Characters } from "@/components";
import type { ICharacter } from "@/interfaces/Character";

const dataSearch = ref<ICharacter[] | null>(null);

function handleSearch(data: ICharacter[] | null) {
  dataSearch.value = data;
}
</script>
<template>
  <Header />
  <main>
    <div class="text">
      <h1>MARVEL CHARACTERS LIST</h1>
      <Search @change="handleSearch" />
    </div>
    <Characters :dataSearch="dataSearch" />
    <div v-show="!dataSearch" class="intersect" id="intersect">
      <trinity-rings-spinner
        :animation-duration="1500"
        :size="66"
        color="rgb(197, 12, 12)"
      />
    </div>
  </main>
</template>
<style scoped lang="css">
main {
  padding: 75px 0 20px 0;
}
.intersect {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  color: var(--text-dark);
  font-weight: bolder;
  font-size: 20px;
}
.text {
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
