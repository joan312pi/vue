<script setup>
console.log('Hello!!');

import Admin from '@/common/admin';
import M from '@/common/member';

const admin = new Admin('Derek', 34, 'M');
const member = new M('Derek', 34);
console.log(admin, member);

import { useRoute } from 'vue-router'
const route = useRoute();


</script>

<template>
  <p>{{ route.params.id1 }}</p>

  <h1>Hello!!!</h1>
  <h1>123</h1>

</template>

<style scoped>
h1 {
  color: yellowgreen;
}
</style>