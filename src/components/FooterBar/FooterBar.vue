<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Github } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-[#1D232A] border-t border-gray-700 text-gray-300 py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

      <div>
        <h2 class="text-xl font-bold text-white mb-4">À propos</h2>
        <p>
          Bienvenue sur le site de Dende, sah le site n'est pas fini mais tu connais c'est deja ça en vrai :)
        </p>
      </div>


      <div>
        <h2 class="text-xl font-bold text-white mb-4">Liens rapides</h2>
        <ul class="space-y-2">
          <li>
            <a href="/" class="hover:text-yellow-400">Accueil</a>
          </li>
          <li>
            <RouterLink to="#" class="hover:text-yellow-400">Contact</RouterLink>
          </li>
        </ul>
      </div>


      <div>
        <h2 class="text-xl font-bold text-white mb-4">Restez connectés</h2>
        <form class="space-y-4">
          <input type="email" placeholder="Entrez votre email"
            class="input input-bordered w-full input-disabled bg-gray-700 text-gray-300" />
          <button class="btn btn-outline w-full btn-disabled">S'abonner</button>
        </form>
        <div class="flex gap-4 mt-4">
          <a href="https://github.com/Adil-DENDE" class="text-xl hover:text-yellow-400">
            <Github />
          </a>
          <a href="#" class="text-xl hover:text-yellow-400">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-xl hover:text-yellow-400">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-xl hover:text-yellow-400">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer bas -->
    <div class="border-t border-gray-700 mt-6 pt-4 text-center">
      <p>&copy; 2024 PokeShop. Tous droits réservés.</p>
    </div>
  </footer>
</template>