<script setup lang="ts">
const { description } = defineProps({
  description: { type: String, default: "" },
});
</script>

<template lang="">
  <div class="biography">
    <h1>BIOGRAPHY</h1>
    <h2 v-if="description">{{ description }}</h2>
    <h2 v-else>No description peovided yet.</h2>

    <div class="mrow"></div>
    <div class="mrowUP"></div>
  </div>
</template>
<style scoped lang="css">
.mrow {
  position: absolute;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0px 25px 25px;
  border-color: transparent transparent var(--background-light) transparent;
}

.mrowUP {
  position: absolute;
  left: 0;
  top: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 0px 25px 25px;
  border-color: transparent transparent transparent var(--background-light);
}
.biography {
  position: relative;
  max-width: 350px;
  margin: 25px;
  text-align: justify;
  background-color: var(--details);
  border-style: solid;
  padding: 25px;
  color: var(--text-light);
}

.biography h1 {
  margin-bottom: 10px;
}
</style>
