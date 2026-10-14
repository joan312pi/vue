<script setup>

import SlotButton from '../SlotButton.vue';

import { ref } from 'vue';
const msg = ref('Hi!!');

const isShow1 = ref(true);
const isShow2 = ref(false);

</script>

<template>

  <p v-pre>{{ msg }}</p>

  <button @click="isShow1 = !isShow1">Click1</button>
  <button @click="isShow2 = !isShow2">Click2</button>
  <p>isShow1： {{ isShow1 }}</p>
  <p>isShow2： {{ isShow2 }}</p>

  <p v-memo="[isShow1, isShow2]">MEMO:{{ isShow2 }}</p>

  <SlotButton>
    <template v-slot:leftIcon>
      <h1>test</h1>
    </template>
    按鈕
  </SlotButton>
  <SlotButton>
    <!-- <template v-slot:leftIcon>☆</template> -->
    按鈕
  </SlotButton>

</template>

<style scoped></style>