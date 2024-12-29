<script setup lang="ts">
import FooterBar from '@/components/FooterBar/FooterBar.vue';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue';
import SkeletonCard from '@/components/ui/SkeletonCard.vue';
import PokemonCard from '@/components/ui/PokemonCard.vue';
import axios from 'axios';
import { onMounted, ref, type Ref } from 'vue';
import type { Pokemon } from '@/Types/Pokemon';

interface NotFullDataPokemon {
    name: string
    url: string
}

// https://stackoverflow.com/questions/61052876/how-to-solve-vuejs-composition-apis-ref-type-error
const pokemon: Ref<Pokemon[]> = ref([]);
const listOfPokemonShow: Ref<NotFullDataPokemon[]> = ref([]);
const searchedPokemon = ref("")

const apiUrl: string = 'https://pokeapi.co/api/v2/';


// Pour fetch 15 random pokemon a afficher sur la page ou ya tout les pokemons
const fetchSearchedPokemon = async (pokemons: string | number) => {
    const fetchedData = await axios.get(`${apiUrl}pokemon/${pokemons}/`)
    const listOfPokemon: Pokemon = fetchedData.data
    pokemon.value.push(listOfPokemon)
}

const fetchAllPokemons = async (limit: string, offset: string) => {
    const fetchedData = await axios.get(`${apiUrl}pokemon?limit=${limit}&offset=${offset}`)
    const fetchedPokemons = fetchedData.data.results
    fetchedPokemons.forEach((element: NotFullDataPokemon) => {
        // Push tout les elements dans la list des pokemon pas entierement get
        // ici on a uniquement get les noms des pokemons
        listOfPokemonShow.value.push(element)
    });
}

const searchPokemon = async () => {
    if (!searchedPokemon.value) {
        console.log("faut remplir le input!");

    } else {
        console.log(searchedPokemon.value);
        const fetchedData = await axios.get(`${apiUrl}pokemon/${searchedPokemon.value}/`)
        const listOfPokemon: Pokemon = fetchedData.data
        console.log(listOfPokemon);
        pokemon.value = []
        pokemon.value.push(listOfPokemon)
    }
}

const sortPokemonList = () => {
    pokemon.value.sort();
    console.log("clicked");
}

// JE DOIS RAJOUTER UN WATCH POUR RENDRE LA PAGE REACTIF
// watch(
//     () => pokemon.value,
//     (curr, prev) => {

//     }
// )

onMounted(async () => {
    await fetchAllPokemons("15", "0");
    listOfPokemonShow.value.forEach(async el => {
        await fetchSearchedPokemon(el.name);
    });
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
                    <span class=" text-white">Rechercher</span>
                    <label class="input input-bordered input-warning flex items-center gap-2">
                        <input type="text" class="grow" placeholder="Nom du Pokémon..." v-model="searchedPokemon" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                            @click="searchPokemon" class="h-4 w-4 opacity-70 cursor-pointer">
                            <path fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </label>
                </div>

                <!-- Filtres -->
                <div class="form-control w-full lg:w-1/4">
                    <label class="input-group">
                        <span class=" text-white">Filtrer</span>
                        <select class="select select-bordered select-warning w-full">
                            <option selected>Tout les type de Pokemon</option>
                            <option>Feu</option>
                            <option>Eau</option>
                            <option>Plante</option>
                            <option>Électrique</option>
                            <option>Roche</option>
                        </select>
                    </label>
                </div>

                <!-- Bouton de tri -->
                <button class="btn btn-neutral btn-outline btn-sm w-full lg:w-auto" @click="sortPokemonList">
                    Trier par Nom
                </button>
            </div>
            <!-- Liste des Pokémon -->
            <div v-if="pokemon.length !== 0"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t b-gray-700 pt-4 pb-4">
                <PokemonCard v-for="poke in pokemon" :key="poke.id" :name="poke.name"
                    :image="poke.sprites.front_default" />
            </div>
            <div v-if="pokemon.length == 0"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t b-gray-700 pt-4 pb-4">
                <SkeletonCard />
            </div>
        </div>
        <FooterBar />
    </div>
</template>
