<script setup>

import { computed, ref, watch } from 'vue';

const fTemp = ref(100);

function getCTemp() {
  return Number(((fTemp.value - 32) * 5 / 9).toFixed(2));
}

const cTemp = computed(() => {
  return Number(((fTemp.value - 32) * 5 / 9).toFixed(2));
})

const displayColor = ref('blue');

watch(cTemp, () => {

  if (cTemp.value >= 30) {
    displayColor.value = 'red';
  } else if (cTemp.value < 20) {
    displayColor.value = 'blue';
  } else {
    displayColor.value = 'black';
  }

}, { immediate: true })

// const style = { 'color': displayColor };

</script>

<template>

  <div>

    <label>華式溫度：</label>
    <input type="number" v-model="fTemp" />
    <!-- <p>攝氏溫度：{{ getCTemp() }}</p> -->
    <p :style="{ 'color': displayColor }">攝氏溫度：{{ cTemp }}</p>

  </div>

</template>

<style scoped></style>