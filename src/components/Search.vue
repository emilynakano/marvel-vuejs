<script setup lang="ts"></script>
<template>
  <div class="field">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="rotating" />
    <input type="text" placeholder="SEARCH" />
    <div class="line"></div>
  </div>
</template>
<style lang="css" scoped>
input {
  margin-left: 10px;
  background: 0;
  border: 0;
  outline: none;
  width: 80vw;
  max-width: 400px;
  font-size: 1.5em;
  transition: padding 0.3s 0.2s ease;

  font-size: 15px;
  text-transform: uppercase;
}

input::placeholder {
  font-size: 15px;
}
input:focus + .line:after {
  transform: scaleX(1);
}

.field {
  position: relative;
}
.field .line {
  width: 80vw;
  max-width: 400px;
  height: 3px;
  position: absolute;
  bottom: -8px;
  background: black;
}
.field .line:after {
  content: " ";
  position: absolute;
  float: right;
  width: 80vw;
  max-width: 400px;
  height: 3px;
  transform: scalex(0);
  transition: transform 0.3s ease;
  background: rgb(211, 19, 19);
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(25deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.rotating {
  animation: rotating 2s linear infinite;
}
</style>
