<script setup>
import { ref, reactive } from 'vue';
import { AbilityPoint } from '@/common/ability-point';

const apRef = ref(AbilityPoint.generateRandom());

function changeApRef() {
  const ap = AbilityPoint.generateRandom();
  // apRef.value.str = ap.str;
  apRef.value = ap;
}

const apReactive = reactive(AbilityPoint.generateRandom());

function changeApReactive() {
  const ap = AbilityPoint.generateRandom();
  apReactive.str = ap.str;
  apReactive.int = ap.int;
  apReactive.luk = ap.luk;
  apReactive.dex = ap.dex;

}

</script>

<template>

  <ul>
    <li>STR：{{ apRef.str }}</li>
    <li>DEX：{{ apRef.dex }}</li>
    <li>INT：{{ apRef.int }}</li>
    <li>LUK：{{ apRef.luk }}</li>
  </ul>
  <button v-on:click="changeApRef()">擲骰</button>
  <hr />
  <ul>
    <li>STR：{{ apReactive.str }}</li>
    <li>DEX：{{ apReactive.dex }}</li>
    <li>INT：{{ apReactive.int }}</li>
    <li>LUK：{{ apReactive.luk }}</li>
  </ul>
  <button v-on:click="changeApReactive()">擲骰</button>

</template>

<style scoped></style>