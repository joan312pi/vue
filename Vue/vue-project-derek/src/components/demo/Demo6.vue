<script setup>

import { ref, nextTick } from 'vue';

const count = ref(0);

function click() {
  count.value++;

  nextTick(() => {
    console.log(1, document.querySelector('#p').textContent);
  })
  console.log(2, document.querySelector('#p').textContent);
}


</script>

<template>

  <p id="p">{{ count }}</p>
  <button @click="click">+1</button>

</template>

<style scoped></style>