<script setup>

const className = 'myClass';

const classObj = { "myClass": true }

// document.querySelector('h2').style.color = "green"

const styleObj = { "color": "green", "background-color": "orange" };

const a = 0;
// !!a => true
// !! 雙驚嘆號 確認是否有 值 是否為真 是否存在 

if (a !== null && a !== undefined && a !== 0) {
  console.log('true');
} else {
  console.log('false');
}


</script>

<template>

  <h1 class="myClass">標題</h1>
  <h1 v-bind:class="className">標題</h1>

  <h3 :class="classObj">標題3</h3>

  <h2 style="color: green;background-color: orange;">標題2</h2>
  <h2 :style="styleObj">標題2</h2>

  <button :disabled="-1">按鈕</button>

</template>

<style scoped>
.myClass {
  color: red;
}
</style>