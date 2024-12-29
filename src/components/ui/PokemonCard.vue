<template>
    <div class="card bg-neutral shadow-md rounded-lg p-4 animate-fade">
        <div class="flex justify-center">
            <img :src="image" alt="Pokémon" class="w-30 h-full object-cover rounded-lg" />
        </div>
        <div class="mt-4 text-center">
            <h2 class="text-lg text-warning font-bold">{{ props.name?.toLocaleUpperCase() }}</h2>
            <p class="text-white">Type: Feu</p>
        </div>
        <button class="btn btn-circle btn-warning mt-4 w-full">
            Ajouter aux Favoris
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: String,
    image: String,
})

</script>