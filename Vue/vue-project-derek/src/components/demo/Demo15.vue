<script setup>
//

import { ref } from 'vue';
const isShow = ref(true);

</script>

<template>

  <button @click="isShow = !isShow">切換</button>
  <Transition>
    <h1 v-show="isShow" class="b">Hello</h1>
  </Transition>

</template>

<style scoped>
.b {
  color: yellow;
}

.v-enter-from {
  opacity: 0;
  color: red;
}

/* .v-enter-to {
  opacity: 1;
  color: green;
} */

.v-enter-active {
  transition:
    opacity 5s linear,
    color 5s ease-out
}
</style>