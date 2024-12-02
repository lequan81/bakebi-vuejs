import { defineStore } from "pinia";

export const useFavoriteProductsStore = defineStore("favoriteProducts", {
  state: () => ({
    favorites: new Set(),
  }),
  actions: {
    toggleFavorite(productId) {
      if (this.favorites.has(productId)) {
        this.favorites.delete(productId);
      } else {
        this.favorites.add(productId);
      }
    },
    isFavorite(productId) {
      return this.favorites.has(productId);
    },
  },
  persist: true, // This will persist the state across page reloads
});
