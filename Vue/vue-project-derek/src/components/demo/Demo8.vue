<script setup>

import { ref, computed } from 'vue';
import studentData from '@/data/student.json';


const student = ref(studentData[0]);

const fnTotalScore = () => {
  console.log('f')
  return student.value.chinese + student.value.english + student.value.math;
}

const totalScore = computed(() => {
  console.log('c')
  // console.log(student.value.name)
  return student.value.chinese + student.value.english + student.value.math;
})

</script>

<template>

  <li>姓名<input type="text" v-model="student.name">{{ student.name }}</li>
  <li>國文<input type="number" v-model="student.chinese">{{ student.chinese }}</li>
  <li>英文<input type="number" v-model="student.english">{{ student.english }}</li>
  <li>數學<input type="number" v-model="student.math">{{ student.math }}</li>
  <li>總分{{ fnTotalScore() }}</li>
  <li>總分{{ totalScore }}</li>

</template>

<style scoped></style>