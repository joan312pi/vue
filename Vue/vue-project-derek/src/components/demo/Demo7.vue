<script setup>

import { ref } from 'vue';

const text = ref('Hello');

function changeTextValue(event) {
  console.log(event)
  text.value = event.target.value;
}

</script>

<template>

  <h1>{{ text }}</h1>
  <input :value="text" @input="changeTextValue" />

  <input v-model="text">


</template>

<style scoped></style>