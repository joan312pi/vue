<script setup>
import { ref } from 'vue';


// const obj = {
//   id: 'XX',
//   text: 'TEST',
//   isDone: true
// }

const newTodo = ref();
const todos = ref([]);

</script>

<template>

  <input v-model="newTodo">
  <button>新增</button>
  <table>
    <tbody>
      <tr v-for="(todo, index) in todos" :key="id">
        <td><input type="checkbox"></td>
        <td>{{ todo.text }}</td>
        <td><button>刪除</button></td>
      </tr>
      <tr>
        <td><input type="checkbox"></td>
        <td>XXXX</td>
        <td><button>刪除</button></td>
      </tr>
      <tr>
        <td><input type="checkbox"></td>
        <td>XXXX</td>
        <td><button>刪除</button></td>
      </tr>
      <tr>
        <td><input type="checkbox"></td>
        <td>XXXX</td>
        <td><button>刪除</button></td>
      </tr>
    </tbody>
  </table>


</template>

<style scoped></style>