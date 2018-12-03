import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saved: [],
    listing_summaries: [],
    listings: [],
    auth: false,
  },
  getters: {
    savedSummaries(state) {
      return state.listing_summaries.filter(
        item => state.saved.indexOf(item.id) > -1
      );
    },
    getListing(state) {
      return id => state.listings.find(listing => id == listing.id);
    }
  },
  mutations: {
    toggleSaved(state, listingId) {
      if (state.auth) {
        let index = state.saved.findIndex(saved => saved === listingId);
        if (index === -1) {
          state.saved.push(listingId);
        } else {
          state.saved.splice(index, 1);
        }
      } else {
        router.push('/login');
      }
    },
    addData(state, { route, data }) {
      if (data.auth) {
        state.auth = data.auth
      }
      if (route === 'listing') {
        state.listings.push(data.listing);
      } else {
        state.listing_summaries = data.listings;
      }
    }
  }
});