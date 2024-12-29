<script setup lang="ts">
import { ShoppingCartIcon } from 'lucide-vue-next';
</script>

<template>
    <div class="hover:text-warning cursor-pointer tooltip tooltip-bottom tooltip-warning mt-auto mb-auto mr-2"
            data-tip="Panier">
            <RouterLink to="/pokedex">
              <ShoppingCartIcon :size="28" />
            </RouterLink>
          </div>
          <div class="dropdown">
            <!-- Avatar avec Tooltip et Dropdown Trigger -->
            <div tabindex="0" class="avatar tooltip tooltip-right tooltip-warning cursor-pointer" data-tip="Profil">
              <div class="ring-warning ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src="/pikachu.png" alt="Profil" />
              </div>
            </div>

            <!-- Dropdown Menu -->
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a href="/profil">Mon Profil</a></li>
              <li><a href="/parametres">Paramètres</a></li>
              <li><a href="/logout">Déconnexion</a></li>
            </ul>
          </div>
</template>