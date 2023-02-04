<script setup lang="ts">
import Characters from "@/components/Characters.vue";
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
import { TrinityRingsSpinner } from "epic-spinners";
import { ref } from "vue";
const textSearch = ref("");

function handleSearch(data: string) {
  textSearch.value = data.trim();
}
</script>
<template>
  <Header />
  <main>
    <div class="text">
      <h1>MARVEL CHARACTERS LIST</h1>
      <Search @change="handleSearch" />
    </div>
    <Characters :search="textSearch" />
    <div v-show="textSearch.length < 3" class="intersect" id="intersect">
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
