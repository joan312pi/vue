<script setup>
import PokemonCard from '@/components/PokemonCard.vue';
import pokemonData from '@/data/pokemon.json';
import { computed, ref } from 'vue';

//

const pokemons = ref(pokemonData);


const getTypeDisplay = (type) => {
  console.log('here')
  return Array.from(type).join("、");
}

// 擴展運算子 => ...
const a = { 'name': 'derek' };
// ...a => 'name':'derek'

const b = [1, 2, 3];
// ...b => 1,2,3
const c = [...b, 4, 5]; // [1,2,3,4,5];

console.log(...c)

const pokemonList = computed(() => {

  const newList = pokemons.value.map(x => {
    // LINQ Select
    const newObj = {

      // number: x.number,
      // name: x.name,
      // image: x.image,
      ...x,
      typeDisplay: getTypeDisplay(x.types),
    }

    return newObj
  })

  return newList;

})

const test = ref();
</script>

<template>
  <input v-model="test" :class="null">
  <div class="panel">
    <div v-for="(pokemon, index) in pokemonList" :key="pokemon.number">
      <PokemonCard :name="pokemon.name" :type="pokemon.typeDisplay" :number="pokemon.number">
        <img :src="pokemon.image">
      </PokemonCard>
    </div>
    <!-- <div v-for="(pokemon, index) in pokemons" :key="pokemon.number">
      <PokemonCard :name="pokemon.name" :type="getTypeDisplay(pokemon.types)" :number="pokemon.number">
        <img :src="pokemon.image">
      </PokemonCard>
    </div> -->
  </div>

</template>

<style scoped>
.panel {
  display: flex;
  flex-wrap: wrap;
}
</style>