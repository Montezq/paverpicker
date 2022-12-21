import { defineStore } from 'pinia';

export const toggleMenu = defineStore('menu', {
  state: () => {
    return { menu: false };
  },
  actions: {
    toggle() {
      this.menu=!this.menu;
    },
  },
});