<script setup>
//

import { ref } from 'vue';
import foodData from '@/data/food.json';
const foodItems = ref(foodData);

const foodId = defineModel('foodId');
const text = defineModel();

</script>

<template>

  <select v-model="foodId">
    <option v-for="(foodItem, index) in foodItems" :key="foodItem.id" :value="foodItem.id">
      {{ foodItem.name }}
    </option>
  </select>
  <input v-model="text" />

</template>

<style scoped></style>