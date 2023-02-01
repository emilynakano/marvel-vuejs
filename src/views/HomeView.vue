<script setup lang="ts">
import md5 from "md5";

const { VITE_PUBLIC_KEY, VITE_PRIVATE_KEY } = import.meta.env;
const offset = 10;
const timeStamp = Date.now().toString();
const hash = createHash(timeStamp);

function createHash(timeStamp: string) {
  const toBeHashed = timeStamp + VITE_PRIVATE_KEY + VITE_PUBLIC_KEY;
  const hashedMessage = md5(toBeHashed);
  return hashedMessage;
}

const urlAPI = `http://gateway.marvel.com/v1/public/characters?limit=9&offset=${offset}&ts=${timeStamp}&apikey=${VITE_PUBLIC_KEY}&hash=${hash}`;
</script>
<template>
  <main>
    <h1>{{ urlAPI }}</h1>
  </main>
</template>
