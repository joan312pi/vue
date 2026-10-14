<script setup>

import { ref } from 'vue';
const score = ref(0);

const isLogin = ref(true);

const visible = ref(true);

</script>

<template>

  <input v-model="score" type="number" placeholder="輸入分數" />
  <p v-if="score >= 60">及格</p>
  <p v-else-if="score >= 40">可</p>
  <p v-else-if="score >= 50">可補考</p>
  <p v-else>不及格</p>


  <hr>

  <button @click="isLogin = !isLogin">登入切換</button>

  <template v-if="isLogin">
    <h1>Hi</h1>
    <p>使用者你好!!</p>
  </template>

  <template v-if="true">
    <p>AAAA</p>
  </template>

  <template v-if="!isLogin">
    <p>尚未登入</p>
  </template>

  <button @click="visible = !visible">{{ visible ? '隱藏內容' : '顯示內容' }}</button>
  <p v-show="visible">Hello!!!</p>


</template>

<style scoped></style>