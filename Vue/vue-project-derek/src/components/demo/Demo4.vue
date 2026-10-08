<script setup>

import { ref, reactive } from 'vue';
// import { reactive } from 'vue';

const count = ref(1);

function addCount() {
  // count.value = count.value + 1;
  count.value++;
}

// const test = {"name":"Derek"};
// test.name

const myStyle = reactive({ "color": "red" });
const colorList = ["red", "green", "blue", "yellow"];

function nextColor() {
  const index = colorList.indexOf(myStyle.color);
  myStyle.color = colorList[(index + 1) % colorList.length];
}


const myStyleRef = ref({ "color": "red" });

function change() {
  // myStyleRef.value = { "color": "blue" };
  myStyleRef.value.color = 'green';
}



</script>

<template>


  <button @click="addCount">{{ count }}</button>
  <button @click="count = count + 100">+100</button>

  <button :style="myStyle" @click="nextColor()">{{ myStyle.color }}</button>
  <button :style="myStyleRef" @click="change">{{ myStyleRef.color }}</button>
</template>

<style scoped></style>