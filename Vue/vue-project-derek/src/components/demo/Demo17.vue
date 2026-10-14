<script setup>
//

import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();

counterStore.count1 = counterStore.count1 + 100;
counterStore.doubleCount

</script>

<template>

  {{ counterStore.count1 }}
  {{ counterStore.doubleCount }}
  <button @click="counterStore.addCount">+1</button>


</template>

<style scoped></style>