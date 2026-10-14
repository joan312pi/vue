<script setup>
import { useToggle } from '@/composables/useToggle';
import { onBeforeMount, onBeforeUnmount } from 'vue';


// const obj = { 'name': "derek", 'age': 35 };
// const name = obj.name;
// const age = obj.age;
// const { name, age } = obj;


const { state, toggle } = useToggle();

onBeforeMount(() => {
  console.log('onBeforeMount here');
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount here');
})


</script>

<template>

  <button @click="toggle">{{ state }}</button>

</template>

<style scoped></style>