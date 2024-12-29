<template>
    <nav class=" px-4 py-3 relative">
        <div class="flex justify-between items-center">

            <!-- Menu Button -->
            <button @click="toggleMenu" class="lg:hidden">
                <MenuIcon :stroke-width="2" class="text-warning lg:hidden animate-fade" />
            </button>
        </div>

        <!-- Side Drawer Menu -->
        <div :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
            class="fixed top-0 left-0 h-full w-64 bg-[#1D232A] shadow-lg transform transition-transform duration-300 lg:hidden z-50 ">
            <img src="/pokeballicon.png" class="absolute w-10 top-2 left-2" alt="">
            <button @click="toggleMenu" class="absolute top-4 right-4 text-gray-600">
                <X :stroke-width="1.5" :size="30" class="text-warning" />
            </button>
            <div class="flex flex-col justify-between h-full">
                <ul class="mt-14 space-y-4 px-4 border-t border-gray-700 pt-2 border-b pb-2">
                    <li>
                        <RouterLink to="/">Acceuil</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pokemon" href="#">Pokemons</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pokedex" href="#">Pokedex</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
                <div class="p-2 flex flex-col border-t border-gray-700">
                    <button class="btn btn-warning btn-sm m-1" onclick="login_modal.showModal()">Se connecter</button>
                    <button class="btn btn-neutral  btn-sm m-1" onclick="my_modal_3.showModal()">S'inscrire</button>
                </div>
            </div>


        </div>
    </nav>
</template>

<script setup lang="ts">
import { MenuIcon, X } from 'lucide-vue-next';
import { ref } from 'vue';
import LoggedInUser from './LoggedInUser.vue';

const menuOpen = ref(false);

const toggleMenu = (): void => {
    menuOpen.value = !menuOpen.value;
};
</script>

<style>
/* Ajoute des styles personnalisés si nécessaire */
</style>