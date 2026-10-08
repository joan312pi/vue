<script setup></script>

<template>

  <h1>About</h1>

  <RouterLink :to="{ 'name': 'Content1' }">Content1</RouterLink>
  <RouterLink :to="{ 'name': 'Content2' }">Content2</RouterLink>
  <hr>
  <RouterView></RouterView>

</template>

<style scoped></style>