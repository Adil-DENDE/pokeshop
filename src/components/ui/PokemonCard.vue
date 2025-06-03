<template>
  <div class="card bg-neutral shadow-md rounded-lg p-4 animate-fade">
    <div class="flex justify-center">
      <img :src="image" alt="Pokémon" class="w-30 h-full object-cover rounded-lg" />
    </div>
    <div class="mt-4 text-center">
      <h2 class="text-lg text-warning font-bold">{{ props.name?.toLocaleUpperCase() }}</h2>
      <p class="text-white">Type: {{ type }}</p>
    </div>
    <button
      v-if="!props.isFavorite"
      class="btn btn-circle btn-warning mt-4 w-full"
      @click="addToFavorites"
    >
      Ajouter aux Favoris
    </button>
    <button v-else class="btn btn-circle btn-error mt-4 w-full" @click="removeFromFavorites">
      Retirer
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePokedexStore } from '@/stores/pokedex'

const props = defineProps({
  id: Number,
  name: String,
  image: String,
  type: String,
  isFavorite: {
    type: Boolean,
    default: false,
  },
})

const pokedex = usePokedexStore()

const addToFavorites = () => {
  if (props.id && props.name && props.image && props.type) {
    pokedex.add({
      id: props.id,
      name: props.name,
      image: props.image,
      type: props.type,
    })
  }
}

const removeFromFavorites = () => {
  if (props.id) {
    pokedex.remove(props.id)
  }
}
</script>
