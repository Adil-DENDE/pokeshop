<template>
    <!-- Carte d'un Pokémon -->
    <div v-for="pokemon in 15" :key="pokemon" class="card bg-neutral shadow-md rounded-lg p-4 animate-fade animate-duration-100000">
        <div class="flex  flex-col gap-4">
            <div class="skeleton h-32 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-8 w-full"></div>
        </div>
    </div>
</template>