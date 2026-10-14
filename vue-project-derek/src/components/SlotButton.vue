<script setup></script>

<template>
  <button>
    ☆
    <slot name="leftIcon"></slot>
    <slot></slot>
  </button>

  

</template>

<style scoped>
button {
  background-color: green;
  color: yellow;
}
</style>