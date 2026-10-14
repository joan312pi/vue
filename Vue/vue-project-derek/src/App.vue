<script setup>

import HelloView from '@/views/HelloView.vue'
import Demo from './components/demo/Demo9.vue';
import BMIView from './views/BMIView.vue';
import TempView from './views/TempView.vue';

const bmiUrl = { 'name': 'BMI' };

</script>

<template>

  <!-- <h1>TEST1111</h1> -->
  <!-- <HelloView></HelloView> -->
  <!-- <HelloView></HelloView>
  <HelloView></HelloView> -->
  <!-- <Demo></Demo> -->
  <!-- <TempView></TempView> -->
  <!-- <BMIView></BMIView> -->

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">練習專案</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'About' }">關於我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/hello">Hello</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="bmiUrl">1.BMI計算</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/temp">2.溫度轉換</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'Score' }">3.成績單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'ToDoList' }">4.待辦清單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'PokemonList' }">5.圖鑑</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'ShoppingCart' }">6.購物車</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'PiniaShoppingCart' }">6-1.Pinia購物車</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'DemoList' }">DemoList</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'Lifecycle' }">Lifecycle</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ 'name': 'Parent' }">父子組件</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <hr>
  <div style="margin: auto;width: 80%;">
    <RouterView></RouterView>
  </div>


</template>

<style scoped>
.my-text-color {
  color: rgb(236, 48, 214) !important;
  font-size: large !important;
  font-weight: bolder;
}
</style>
