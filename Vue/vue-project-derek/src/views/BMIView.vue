<script setup>

import { ref } from 'vue';

const height = ref();
const weight = ref();
const bmi = ref();
const isHidden = ref(true);

function calBMI() {
  bmi.value = (weight.value / Math.pow(height.value * 0.01, 2)).toFixed(2);
  isHidden.value = false;
}

</script>

<template>

  <div>
    身高(公分cm)：<input v-model="height" type="number" />
    體重(公斤kg)：<input v-model="weight" type="number" />
  </div>
  <br />
  <button @click="calBMI()">計算</button>
  <br>
  <span v-bind:hidden="isHidden">您的BMI：{{ bmi }}</span>

</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}
</style>