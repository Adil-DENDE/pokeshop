<script setup lang="ts">
import FooterBar from '@/components/FooterBar/FooterBar.vue';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue';
import { CircleUserRoundIcon, Github, Instagram, Linkedin, Twitter } from 'lucide-vue-next';
</script>

<template>
    <div>
        <NavigationBar />
        <p class="text-center text-4xl pt-6 text-warning font-bold animate-fade-right">Mon contact</p>
        <div
            class="min-h-screen flex flex-col items-center py-10  animate-fade-up">
            <!-- Avatar -->
            <div class="relative">
                <CircleUserRoundIcon :size="200" :stroke-width="0.5"  />
                
            </div>

            <!-- Description -->
            <div class="text-center mt-6">
                <h1 class="text-4xl text-white font-bold">DENDE</h1>
                <p class="mt-4 text-gray-200 max-w-md mx-auto">
                    Passionné par le développement web. Je suis ici pour partager mon univers
                    et mes projets !
                    Vous pouvez me retrouver sur mes réseaux ci-dessous.
                </p>
            </div>

            <!-- Réseaux sociaux -->
            <div class="flex gap-6 mt-8">
                <!-- Exemple d'icônes de réseaux sociaux -->
                <a href="https://twitter.com" target="_blank" class="hover:scale-110 transition text-yellow-300">
                    <Twitter :stroke-width="1.5" />
                </a>
                <a href="https://github.com" target="_blank" class="hover:scale-110 transition text-yellow-300">
                    <Github :stroke-width="1.5" />
                </a>
                <a href="https://linkedin.com" target="_blank" class="hover:scale-110 transition text-yellow-300">
                    <Linkedin :stroke-width="1.5" />
                </a>
                <a href="https://instagram.com" target="_blank" class="hover:scale-110 transition text-yellow-300">
                    <Instagram :stroke-width="1.5" />
                </a>
            </div>

            <!-- Bouton pour contacter -->
            <div class="mt-10">
                <button
                    class="btn btn-warning btn-outline font-bold py-3 px-6 rounded-full shadow-lg">
                    Me Contacter
                </button>
            </div>
        </div>

        <FooterBar />
    </div>
</template>