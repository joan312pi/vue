<script setup>

import { ref, watch, watchEffect } from 'vue';

const count = ref(0);

function addCount() {
  count.value++;
}

watch(count, (newVal, oldVal) => {
  console.log('值被改變')
  console.log(newVal, oldVal);
})

import memberData from '@/data/member.json';
const member = ref(memberData[0]);

watch(member, (newVal, oldVal) => {
  // console.log(document.querySelector('p').textContent)
  console.log('member', newVal, oldVal);
}, { deep: true, immediate: true, flush: 'post' })


const f = () => { return member.value.age }

watch(() => member.value.age, (newVal, oldVal) => {
  console.log(document.querySelector('p').textContent);
  console.log('age', newVal, oldVal);
})

function addAge() {
  member.value.age = member.value.age + 1;
}

function changeMember() {
  const index = Math.floor(Math.random() * 10);
  member.value = memberData[index];
}


const m = { 'name': 'Derek' };
console.log(m.age);
console.log(m);
const m2 = m;
m2.name = 'Peter';
console.log(m.name);
m.age = '11';


const name = ref('Amy');
const age = ref(20);

// watch(XXX)
watchEffect(() => {
  console.log(name.value);
  console.log(age.value);
})


</script>

<template>

  <div>{{ count }}</div>
  <button @click="addCount">+1</button>
  <p>{{ member.age }}</p>
  <button @click="addAge">年齡+1</button>
  <button @click="changeMember">換會員</button>

  <input v-model="name" type="text">
  <input v-model="age" type="number">

</template>

<style scoped></style>