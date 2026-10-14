<script setup>
import { computed, ref, TransitionGroup } from 'vue';


// const obj = {
//   id: 'XX',
//   text: 'TEST',
//   isDone: true
// }

const newTodo = ref();
const todos = ref([]);

function addTodo() {
  const text = newTodo.value.trim();
  if (text) {
    const todo = {
      id: Date.now(),  // 1970/1/1 到現在經歷幾毫秒
      text: newTodo.value,
      isDone: false
    };
    todos.value.push(todo);
  }
  else {
    // ...
  }

}


function getDoneCount() {
  return todos.value.filter(e => e.isDone).length;
}


const doneCount = computed(() => {
  return todos.value.filter(e => e.isDone).length;
})

function removeTodo(id) {
  todos.value = todos.value.filter(e => e.id !== id);
}

</script>

<template>

  <input v-model="newTodo" type="text" />
  <button @click="addTodo">新增</button>
  <table>
    <tbody>

      <TransitionGroup name="t1">

        <tr v-for="(todo, index) in todos" :key="todo.id">
          <td><input type="checkbox" v-model="todo.isDone"></td>
          <td :class="{ 'done': todo.isDone }">{{ todo.text }}</td>
          <td><button @click="removeTodo(todo.id)">刪除</button></td>
        </tr>

      </TransitionGroup>

    </tbody>
  </table>
  <p>共{{ todos.length }}項，已完成{{ doneCount }}項</p>


</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}


.t1-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.t1-enter-active {
  transition:
    opacity 1s ease-out,
    transform 1s ease-out
}
</style>