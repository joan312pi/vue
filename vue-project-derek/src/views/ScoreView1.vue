<script setup>
import studentData from '@/data/student.json';
import { useSearch } from '@/composables/useSearch';
const { keyword, result } = useSearch(studentData, 'name');

</script>

<template>
  <h1>1</h1>
  搜尋：<input type="text" v-model="keyword">
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
      <tr v-for="(student, index) in result" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.chinese }}</td>
        <td>{{ student.english }}</td>
        <td>{{ student.math }}</td>
      </tr>
    </tbody>
  </table>


</template>

<style scoped></style>