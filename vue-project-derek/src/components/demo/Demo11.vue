<script setup>

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

const member = { 'name': 'derek' };
member.name = 'Sam';
member['name'] = 'Sam';

//             0    1     2   3
const list = ['a', 'b', 'c', 'd'];
for (const m of list) {
  console.log(m)
}

for (const m in list) {
  console.log(m)
}

import { ref } from 'vue';
import foodData from '@/data/food.json';
const foodItems = ref(foodData);

const selectedItem = ref(-1);

const foodName = ref();

function add() {
  // map => LINQ select
  // filter => LINQ where
  foodItems.value.push({
    id: foodItems.value.length + 1,
    name: foodName.value
  })
}

const arr = [];

import studentData from '@/data/student.json';
const student = ref(studentData[1]);


</script>

<template>

  <select v-model="selectedItem">
    <option value="-1">請選擇</option>
    <option v-for="(foodItem, index) in foodItems" :key="foodItem.id" :value="foodItem.id">{{ index }} {{ foodItem.name
    }}
    </option>
  </select>
  {{ selectedItem }}

  <hr />
  {{ foodName }}
  <br />
  <input type="text" v-model="foodName">
  <button @click="add">新增</button>

  <hr>

  <ul>
    <li v-for="(item, key) in student" :key="key">{{ key }}:{{ item }}</li>
  </ul>

</template>

<style scoped></style>