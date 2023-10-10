import { defineStore } from 'pinia';

export const useSlideStore = defineStore('slide', {
  state: () => ({
    slides: {}
  }),
  actions: {
    getSlideState(pageIdentifier) {
      return this.slides[pageIdentifier] || { current: 0, next: 1, past: 0 };
    },

    setSlideState(pageIdentifier, slideState) {
      this.slides[pageIdentifier] = slideState;
    },

    resetSlideState(pageIdentifier) {
      this.slides[pageIdentifier] = { current: 0, next: 1, past: 0 };
    }
  }
});