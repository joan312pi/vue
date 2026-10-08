<script setup>

const msg = "TEST";

// document.querySelector('p').textContent = msg;

const msg1 = `<h1>標題</h1>`

const msg2 = `<img src="error.jpg" onerror="alert('XSS攻擊')">`

// 宣告式
function getFnValue() {
  return '宣告式'
}

// 表達式
const getFnValue1 = function () { return '表達式' }

// 箭頭函示
// const getFnValue2 = () => { return '箭頭函示' }
const getFnValue2 = () => '箭頭函示'



</script>

<template>


  <p v-text="msg"></p>

  <p v-html="msg1"></p>
  <!-- <p v-html="msg2"></p> -->

  <hr>

  <p>{{ msg }}</p>
  <p>{{ msg1 }}</p>
  <p>{{ getFnValue2() }}</p>


</template>

<style scoped></style>