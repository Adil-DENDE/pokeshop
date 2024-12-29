<script setup lang="ts">
import { ShoppingCartIcon } from 'lucide-vue-next';
</script>

<template>
    <div class="hover:text-yellow-300 cursor-pointer tooltip tooltip-bottom tooltip-warning hidden lg:block"
        data-tip="Panier">
        <RouterLink to="/pokedex">
            <ShoppingCartIcon :size="28" />
        </RouterLink>
    </div>
    <button class="btn btn-warning  btn-sm hidden lg:block" onclick="login_modal.showModal()">Connexion</button>
    <button class="btn btn-neutral  btn-sm hidden lg:block" onclick="register_modal.showModal()">S'inscrire</button>
</template>