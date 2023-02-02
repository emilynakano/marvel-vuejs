<script setup lang="ts">
import Header from "@/components/Header.vue";
import { TrinityRingsSpinner } from "epic-spinners";
import { useRoute } from "vue-router";

const { params } = useRoute();
const id = params.id;
</script>
<template>
  <Header />
  <main>
    <div class="spinner">
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
.spinner {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
