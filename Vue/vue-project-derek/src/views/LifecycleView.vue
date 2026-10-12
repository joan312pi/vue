<script>

export default {
  data() {
    console.log('option');
    return {}
  },
  methods() {

  }
}

</script>


<script setup>
import { nextTick, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';


console.log(document.querySelector('h1'));

const test = ref();

console.log('composition');

nextTick(() => { })

onBeforeMount(() => {

  console.log('BeforeMount');
  console.log(document.querySelector('h1'));

});
onMounted(() => {

  console.log('Mounted');
  console.log(document.querySelector('h1'));

});

onBeforeUpdate(() => {
  console.log('BeforeUpdate');
});
onUpdated(() => {
  console.log('Updated');
});

onBeforeUnmount(() => {

  console.log('BeforeUnmount');

});
onUnmounted(() => {

  console.log('Unmounted');

});

</script>

<template>

  <h1>test</h1>

  <input v-model="test">

</template>

<style scoped></style>