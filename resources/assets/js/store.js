import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saved: [],
    listing_summaries: [],
    listings: [],
  },
  mutations: {
    toggleSaved(state, listingId) {
      let index = state.saved.findIndex(saved => saved === listingId);
      if (index === -1) {
        state.saved.push(listingId);
      } else {
        state.saved.splice(index, 1);
      }
    },
    addData(state, { route, data }) {
      if (route === 'listing') {
        state.listings.push(data.listing);
      } else {
        state.listing_summaries = data.listings;
      }
    }
  }
});