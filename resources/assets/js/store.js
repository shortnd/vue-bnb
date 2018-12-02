import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saved: []
  },
  mutations: {
    toggleSaved(state, listingId) {
      let index = state.saved.findIndex(saved => saved === listingId);
      if (index === -1) {
        state.saved.push(listingId);
      } else {
        state.saved.splice(index, 1);
      }
    }
  }
});