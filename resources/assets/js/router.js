import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import ListingPage from './components/ListingPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'home'
    },
    {
      path: '/listings/:listing',
      component: ListingPage,
      name: 'listing'
    }
  ],
  scrollBehavior (to, from, savedPostition) {
    return { x: 0, y:0 };
  }
});