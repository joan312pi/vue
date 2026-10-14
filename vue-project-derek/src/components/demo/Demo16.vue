<script setup>
import { ref } from 'vue';
import ProjButton from '../ProjButton.vue';
import FoodSelect from '../FoodSelect.vue';

const text = ref('search');

function change() {
  text.value = 'add';
}

const foodId = ref(5);
// const text = ref('test');


import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();



</script>

<template>
  <ProjButton :type="text"></ProjButton>
  <ProjButton type="text"></ProjButton>
  <!-- <ProjButton type="add"></ProjButton> -->
  <!-- <ProjButton type="remove"></ProjButton> -->

  <button @click="change">切換</button>

  <hr />

  {{ foodId }}
  <FoodSelect v-model:food-id="foodId" v-model="text"></FoodSelect>

  {{ counterStore.count1 }}
</template>

<style scoped></style>