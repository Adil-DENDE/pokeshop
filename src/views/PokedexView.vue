<script setup lang="ts">
import FooterBar from '@/components/FooterBar/FooterBar.vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import PokemonCard from '@/components/ui/PokemonCard.vue'
import { usePokedexStore } from '@/stores/pokedex'
import { onMounted } from 'vue'

const pokedex = usePokedexStore()

onMounted(() => {
  pokedex.load()
})
</script>

<template>
  <NavigationBar />
  <div class="min-h-screen text-white container mx-auto">
    <!-- En-tête -->
    <div class="text-center py-10">
      <h1 class="text-5xl font-bold text-yellow-500 mb-4">Mon Pokédex</h1>
      <p class="text-gray-300">Retrouve ici tous les Pokémon que tu as ajoutés à tes favoris !</p>
    </div>

    <div
      v-if="pokedex.favorites.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t b-gray-700 pt-4 pb-4"
    >
      <PokemonCard
        v-for="poke in pokedex.favorites"
        :key="poke.id"
        :id="poke.id"
        :name="poke.name"
        :image="poke.image"
        :type="poke.type"
        :isFavorite="true"
      />
    </div>

    <div v-else class="text-center py-20">
      <p class="text-gray-300">Aucun Pokémon dans ton Pokédex pour l'instant.</p>
    </div>
  </div>
  <FooterBar />
</template>
