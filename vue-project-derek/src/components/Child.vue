<script setup>
//

// defineProps(['title']);

// const props = defineProps({ 'title': String });


const props = defineProps({
  'title': String,
  'msg': { type: String, required: true },
  'count': { type: Number, default: 10 }
});

const emit = defineEmits(['btnClicked', 'btnClicked2']);

function handleClick() {
  emit('btnClicked', { 'msg': '來自子組件' });
}


</script>

<template>
  {{ props.title }}
  {{ props.msg }}
  {{ props.count }}

  <button @click="handleClick">點擊</button>

</template>

<style scoped></style>