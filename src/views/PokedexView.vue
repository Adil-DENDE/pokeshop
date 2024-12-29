<script setup lang="ts">
import FooterBar from '@/components/FooterBar/FooterBar.vue';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <div class="min-h-screen text-white ">
    <!-- En-tête -->
    <div class="text-center py-10">
      <h1 class="text-5xl font-bold text-yellow-500 mb-4">Pokédex Interactif</h1>
      <p class="text-gray-300">
        Explorez le Pokédex et découvrez tous les secrets des Pokémon ! Cliquez sur un Pokémon pour en savoir plus.
      </p>
    </div>


  </div>
  <FooterBar/>
</template>
