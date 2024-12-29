import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonView from '../views/PokemonView.vue';
import PokedexView from '@/views/PokedexView.vue';
import ContactView from '@/views/ContactView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: PokemonView
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: PokedexView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
})

export default router
