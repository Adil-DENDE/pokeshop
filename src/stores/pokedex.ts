import { defineStore } from 'pinia'
import type { FavoritePokemon } from '@/Interfaces/Pokemon'

export const usePokedexStore = defineStore('pokedex', {
  state: () => ({
    favorites: [] as FavoritePokemon[],
  }),
  actions: {
    add(pokemon: FavoritePokemon) {
      if (!this.favorites.some((p) => p.id === pokemon.id)) {
        this.favorites.push(pokemon)
        this.persist()
      }
    },
    remove(id: number) {
      this.favorites = this.favorites.filter((p) => p.id !== id)
      this.persist()
    },
    load() {
      const data = localStorage.getItem('favorites')
      if (data) {
        try {
          this.favorites = JSON.parse(data)
        } catch (e) {
          this.favorites = []
        }
      }
    },
    persist() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
  },
})
