<script setup>

const printLog = (eventObj) => {
  console.log('print success!!!!');
  console.log(eventObj);
}

function printText(text, e) {
  console.log(text);
  console.log(e);
}

// document.querySelector('button').addEventListener('click', printLog)

const e2 = (e) => { printText('Hello!!', e) };

</script>

<template>

  <button @click="printLog">Print</button>

  <button @click="printText('TEST', $event)">TEST</button>
  <button @click="printText('HERE')">HERE</button>


  <button @click="(e) => { printText('Hello!!', e) }">Hello</button>
  <button @click="e2">Hello</button>


</template>

<style scoped></style>