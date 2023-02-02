<script setup lang="ts">
import Characters from "@/components/Characters.vue";
import Header from "@/components/Header.vue";
import { TrinityRingsSpinner } from "epic-spinners";
</script>
<template>
  <Header />
  <main>
    <Characters />
    <div class="intersect" id="intersect">
      <trinity-rings-spinner
        :animation-duration="1500"
        :size="66"
        color="rgb(197, 12, 12)"
      />
    </div>
  </main>
</template>
<style lang="css">
main {
  padding: 40px 0 20px 0;
}
.intersect {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
