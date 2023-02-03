<script setup lang="ts">
const { description } = defineProps({
  description: { type: String, default: "" },
});
</script>

<template lang="">
  <div class="biography">
    <div class="text">
      <h1>BIOGRAPHY</h1>
      <h2 v-if="description">{{ description }}</h2>
      <h2 v-else>No description peovided yet.</h2>
    </div>

    <div class="rowUp"></div>
    <div class="rowDown"></div>
  </div>
</template>
<style scoped lang="css">
.rowDown {
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

.rowUp {
  position: absolute;
  left: 0;
  top: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 0px 25px 25px;
  border-color: transparent transparent transparent rgb(10, 10, 10);
}
.biography {
  position: relative;
  width: 350px;
  height: 150px;
  margin-top: -100px;
  margin-left: 350px;
  text-align: justify;
  background-color: var(--details);
  border-style: solid;
  padding: 25px;
  color: var(--text-light);
}

.text {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 107px;
  overflow-y: scroll;
}
.biography h1 {
  margin-bottom: 10px;
  font-weight: bold;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

@media screen and (max-width: 750px) {
  .biography {
    position: relative;
    max-width: 350px;
    width: 80%;
    height: auto;
    margin-top: 25px;
    margin-left: 25px;
  }
  .text {
    overflow: visible;
    max-height: 100%;
  }
  .rowUp {
    border-color: transparent transparent transparent var(--background-light);
  }
}
</style>
