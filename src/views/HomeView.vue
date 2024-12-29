<script setup lang="ts">
import FooterBar from '@/components/FooterBar/FooterBar.vue';
import NavBar from '@/components/NavigationBar/NavigationBar.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <NavBar />
    <div class="hero min-h-screen text-white ">

        <div class="hero-content  flex-col lg:flex-row items-center gap-10 container mx-auto animate-fade-right">
            <!-- Image de la Pokeball -->
            <img src="/Pokemon.png" alt="Pokeball" class="w-44 lg:w-60 animate-bounce">

            <!-- Contenu texte -->
            <div class="text-center lg:text-left">
                <img src="/Jigglypuff.png"
                    class="w-10 absolute left-[530px] top-[-1px] animate-fade-down animate-once animate-duration-1000 animate-ease-in animate-delay-700 hidden lg:block"
                    alt="">
                <h1
                    class="text-5xl lg:text-6xl font-bold drop-shadow-lg animate-fade-down animate-once animate-duration-1000 animate-ease-in">
                    Attrapez-les tous !</h1>
                <p class="py-6 text-lg lg:text-xl animate-fade-up">
                    Bienvenue dans l'univers fascinant des Pokémon ! Découvrez des créatures extraordinaires,
                    enrichissez votre
                    Pokédex et partez à l'aventure. Que vous soyez novice ou expert, il y a toujours de nouvelles
                    surprises à
                    découvrir.
                </p>
                <div class="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                    <RouterLink to="/pokemon">
                        <button class="btn btn-warning btn-md animate-jump-in">
                            Découvrir les Pokémon
                        </button>
                    </RouterLink>
                    <RouterLink to="/">
                        <button
                            class="btn btn-secondary btn-outline btn-md animate-wiggle animate-infinite animate-ease-in-out">
                            Surprise Mystère
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <FooterBar />
</template>
