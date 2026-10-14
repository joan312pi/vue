<script setup>
//
import Child from '@/components/Child.vue';

const msg = '來自父組件資訊'

function handleChildClick(eventObject) {
  console.log('here', eventObject);
}

</script>

<template>

  <!-- <button @click=""></button> -->
  <Child title="test" :msg="msg" @btn-clicked="handleChildClick"></Child>


  <!-- <h1>xxXXXXX</h1> v-slot -->

</template>

<style scoped></style>