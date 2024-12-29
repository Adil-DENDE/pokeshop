<template>
  <div class="navbar  text-white shadow-lg bg-[#1D232A] z-50 ">
    <div class="container mx-auto flex justify-between items-center p-3">

      <!-- ICONE DU SITE ET TITRE -->
      <div class="flex items-center gap-3">
        <RouterLink to="/">
          <img src="/pokeballicon.png" alt="Pokeball" class="h-10">
        </RouterLink>
        <h1 class="text-2xl font-bold drop-shadow-lg hover:text-warning">
          <RouterLink to="/">PokeShop</RouterLink>
        </h1>
      </div>
      <!-- ICONE DU SITE ET TITRE -->


      <!-- NAVIGATION DU SITE SUR ORDINATEUR(GRAND ECRAN) -->
      <nav class="hidden lg:block">
        <ul class="flex gap-8 text-lg">
          <li class="hover:text-warning cursor-pointer">
            <RouterLink to="/">Acceuil</RouterLink>
          </li>
          <li class="hover:text-warning cursor-pointer">
            <RouterLink to="/pokemon">Pokemons</RouterLink>
          </li>
          <li class="hover:text-warning cursor-pointer">
            <RouterLink to="/pokedex">Pokedex</RouterLink>
          </li>

          <li class="hover:text-warning cursor-pointer">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </nav>
      <!-- NAVIGATION DU SITE SUR ORDINATEUR(GRAND ECRAN) -->

      <!-- ICI TU AFFICHERAS LE BON COMPOSANT SI USER EST CO OU PAS -->
      <div>
        <div class="flex gap-3 ">
          <NotLoggedUser />
          <!-- <LoggedInUser  /> -->

          <!-- HAMBURGER MENU PARFAIT DEJA -->
          <HamburgerMenu />
          <!-- HAMBURGER MENU PARFAIT DEJA -->

        </div>
        <!-- Modal pour se connecter / register -->
        <LoginModal />
        <RegisterModal />
        <!-- Modal pour se connecter / register -->

      </div>
      <!-- ICI TU AFFICHERAS LE BON COMPOSANT SI USER EST CO OU PAS -->

    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

// import LoggedInUser from './LoggedInUser.vue';
import HamburgerMenu from './HamburgerMenu.vue';
import NotLoggedUser from './NotLoggedUser.vue';
import LoginModal from '../AuthModal/LoginModal.vue';
import RegisterModal from '../AuthModal/RegisterModal.vue';


</script>
