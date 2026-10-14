<script setup>
import { computed, ref, watch } from 'vue';

const emit = defineEmits(['click']);

function clickHandle() {
  emit('click');
}


const props = defineProps(['type']);

const name = ref();
switch (props.type) {
  case 'search':
    name.value = '搜尋'
    break;
  case 'add':
    name.value = '新增'
    break;
  default:
    break;
}

// const obj = {
//   text: 'xxx',
//   className: "",
//   icon: 'XXX'
// }

const buttonDisplay = computed(() => {
  const obj = {};
  switch (props.type) {
    case 'search':
      obj.text = '搜尋';
      obj.className = 'btn btn-primary btn-sm';
      obj.icon = 'bi bi-search';
      break;
    case 'add':
      obj.text = '新增';
      obj.className = 'btn btn-success btn-sm';
      obj.icon = 'bi bi-plus-lg';
      break;
    case 'cal':
      obj.text = '計算';
      obj.className = 'btn btn-warning btn-sm';
      obj.icon = 'bi bi-calculator';
      break
    default:
      obj.text = '未定義';
      break;
  }
  return obj;
})


</script>

<template>
  <!-- <button>☆{{ name }}</button> -->
  <button @click="emit('click', $event)" :class="buttonDisplay.className">
    <i :class="buttonDisplay.icon"></i>
    <!-- <i class="bi bi-4-square"></i> -->
    {{ buttonDisplay.text }}</button>

  <!-- <button v-bind:style="XXX" v-on:click="">XXXX</button> -->

</template>

<style scoped></style>