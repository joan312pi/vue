<script setup>

import { ref } from 'vue';
import studentData from '@/data/student.json';

const students = ref(studentData);
const search = ref();

function searchName() {
  // x => f(x)
  // e => element

  const searchText = search.value.trim();
  if (searchText) {
    students.value = studentData.filter(x => x.name.toUpperCase().includes(search.value.toUpperCase()));
  } else {
    students.value = studentData;
  }
}

</script>

<template>

  搜尋：<input type="text" v-model="search" @keyup.enter="searchName">
  <table class="table">
    <thead>
      <tr>
        <th colspan="4">學生成績單</th>
      </tr>
      <tr>
        <th>姓名</th>
        <th>國文</th>
        <th>英文</th>
        <th>數學</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(student, index) in students" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.chinese }}</td>
        <td>{{ student.english }}</td>
        <td>{{ student.math }}</td>
      </tr>
    </tbody>
  </table>


</template>

<style scoped></style>