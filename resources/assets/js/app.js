import Vue from 'vue';
// import VueRouter from 'vue-router';
import "core-js/fn/object/assign";
import App from './components/App';
import router from './router.js';


var app = new Vue({
  el: '#app',
  render: h => h(App),
  router
});