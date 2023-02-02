<script setup lang="ts">
import handleScroll from "@/utils/handleScroll";
import { onMounted } from "vue";
import logo from "../assets/images/logo.png";

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
<template>
  <header id="header">
    <img :src="logo" alt="" srcset="" />
  </header>
</template>

<style lang="css" scoped>
header {
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  transition: all 0.6s ease;
}

.hidden {
  top: -60px;
}
img {
  height: 60px;
  width: auto;
}
</style>
