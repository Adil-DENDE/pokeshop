<script setup lang="ts">
import FooterBar from '@/components/FooterBar/FooterBar.vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import SkeletonCard from '@/components/ui/SkeletonCard.vue'
import PokemonCard from '@/components/ui/PokemonCard.vue'
import axios from 'axios'
import { onMounted, ref, watchEffect, type Ref } from 'vue'
import type { NotFullDataPokemon, Pokemon } from '@/Interfaces/Pokemon'
import LoadingComponent from '@/components/ui/LoadingComponent.vue'

// Références réactives pour la gestion de l'état
const pokemon: Ref<Pokemon[]> = ref([])
const listOfPokemonShow: Ref<NotFullDataPokemon[]> = ref([])
const searchedPokemon = ref('')
const apiUrl: string = 'https://pokeapi.co/api/v2/'
const filteredItems: Ref<Pokemon[]> = ref([])
const itemsToShow: Ref<number> = ref(24)
const totalPokemon: Ref<number> = ref(1015)

// Fonction pour récupérer un Pokémon par nom
const fetchSearchedPokemon = async (pokemonName: string) => {
  try {
    const { data } = await axios.get<Pokemon>(`${apiUrl}pokemon/${pokemonName.toLowerCase()}/`)
    pokemon.value.push(data)
    filteredItems.value = [...pokemon.value]
  } catch (error) {
    console.error(`Erreur lors de la récupération du Pokémon ${pokemonName}:`, error)
  }
}

// Fonction pour récupérer la liste des Pokémon
const fetchAllPokemons = async (limit: string, offset: string) => {
  try {
    const { data } = await axios.get(`${apiUrl}pokemon?limit=${limit}&offset=${offset}`)
    listOfPokemonShow.value = data.results
  } catch (error) {
    console.error('Erreur lors de la récupération de la liste des Pokémon:', error)
  }
}

// Réinitialisation du champ de recherche
const clearField = async () => {
  searchedPokemon.value = ''
}

// Tri des Pokémon par nom
const sortPokemonList = () => {
  pokemon.value.sort((a, b) => a.name.localeCompare(b.name))
}

// Afficher plus de Pokémon
const showMore = () => {
  itemsToShow.value = Math.min(itemsToShow.value + 20, totalPokemon.value)
}

// Réduire le nombre de Pokémon affichés
const showLess = () => {
  itemsToShow.value = Math.max(itemsToShow.value - 20, 20)
}

// Gestion des recherches
watchEffect(() => {
  if (searchedPokemon.value.trim() === '') {
    pokemon.value = [...filteredItems.value]
  } else {
    pokemon.value = filteredItems.value.filter((item) =>
      item.name.toLowerCase().includes(searchedPokemon.value.toLowerCase()),
    )
  }
})

// Chargement des Pokémons
onMounted(async () => {
  await fetchAllPokemons('1015', '0')
  const fetchPromises = listOfPokemonShow.value.map((el) => fetchSearchedPokemon(el.name))
  await Promise.all(fetchPromises)
})
</script>

<template>
  <div>
    <NavigationBar />
    <div class="container mx-auto p-4 min-h-screen">
      <!-- Barre de recherche et filtres -->
      <div class="flex flex-col lg:flex-row gap-4 justify-between items-center mb-6">
        <!-- Barre de recherche -->
        <div class="form-control w-full lg:w-1/3">
          <span class="text-white">Rechercher</span>
          <label class="input input-bordered input-warning flex items-center gap-2">
            <input
              type="text"
              class="grow"
              placeholder="Nom du Pokémon..."
              v-model="searchedPokemon"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              @click="clearField"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x cursor-pointer"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </label>
        </div>

        <!-- PLUS TARD PEUT ETRE -->
        <!-- Filtres -->
        <!-- <div class="form-control w-full lg:w-1/4">
                    <label class="input-group">
                        <span class="text-white">Filtrer</span>
                        <select class="select select-bordered select-warning w-full">
                            <option selected>Tous les types de Pokémon</option>
                            <option>Feu</option>
                            <option>Eau</option>
                            <option>Plante</option>
                            <option>Électrique</option>
                            <option>Roche</option>
                        </select>
                    </label>
                </div> -->

        <!-- Bouton de tri -->
        <button
          class="btn btn-neutral btn-outline btn-sm w-full lg:w-auto"
          @click="sortPokemonList"
        >
          Trier par Nom
        </button>
      </div>

      <!-- Liste des Pokémon -->
      <div
        v-if="pokemon.length !== 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t b-gray-700 pt-4 pb-4"
      >
        <Suspense>
          <PokemonCard
            v-for="poke in pokemon.slice(0, itemsToShow)"
            :key="poke.id"
            :id="poke.id"
            :name="poke.name"
            :image="poke.sprites.front_default"
            :type="poke.types.map((type) => type.type.name)[0].toUpperCase()"
          />
          <template #fallback>
            <LoadingComponent />
          </template>
        </Suspense>
      </div>

      <div
        v-else-if="pokemon.length == 0 && !searchedPokemon"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t b-gray-700 pt-4 pb-4"
      >
        <SkeletonCard />
      </div>
      <!-- Quand on recherche un pokemon qui n'existe -->
      <div v-if="searchedPokemon && pokemon.length == 0" class="border-t b-gray-700">
        <p class="text-center mt-5 text-warning">
          Oops ! Aucun Pokémon ne correspond à ce nom. Essayez une autre recherche !
        </p>
      </div>

      <div class="flex justify-center gap-3">
        <div>
          <button
            v-if="itemsToShow < totalPokemon && !searchedPokemon"
            @click="showMore"
            class="btn btn-outline rounded-xl"
          >
            Afficher plus
          </button>
        </div>
        <div>
          <button
            v-if="itemsToShow > 24 && !searchedPokemon"
            @click="showLess"
            class="btn btn-outline rounded-xl"
          >
            Afficher moins
          </button>
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>
