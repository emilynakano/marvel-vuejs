<script setup lang="ts">
import { getCharacterById } from "@/services/charactersService";
import { TrinityRingsSpinner } from "epic-spinners";
import { onMounted, ref } from "vue";

const { id } = defineProps({
  id: { type: Number, default: 0 },
});

let characterInfo = ref(null);
onMounted(async () => {
  const data = await getCharacterById(id);
  characterInfo.value = data;
});
</script>
<template>
  <div v-if="characterInfo">
    <h1>{{ characterInfo }}</h1>
  </div>
  <div v-else class="spinner">
    <trinity-rings-spinner
      :animation-duration="1500"
      :size="66"
      color="rgb(197, 12, 12)"
    />
  </div>
</template>
<style scoped lang="css"></style>
