<template>
  <div>
    <div id="toolbar">
      <router-link :to="{ name: 'home' }">
        <img class="icon" src="/images/logo.png">
        <h2>vuebnb</h2>
      </router-link>
    </div>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomFooter from './CustomFooter.vue';
export default {
  components: {
    CustomFooter
  }
}
</script>

<style>
  #toolbar a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
</style>
