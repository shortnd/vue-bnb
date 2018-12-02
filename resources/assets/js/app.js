import Vue from 'vue';
import "core-js/fn/object/assign";
import App from './components/App';
import router from './router.js';
import store from './store.js';


var app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});