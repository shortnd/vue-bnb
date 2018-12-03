<template>
  <div>
    <div id="toolbar">
      <router-link :to="{ name: 'home' }">
        <img class="icon" src="/images/logo.png">
        <h2>vuebnb</h2>
      </router-link>
      <ul class="links">
        <li v-if="$store.state.auth">
          <router-link :to="{ name: 'saved' }">Saved</router-link>
        </li>
        <li v-if="$store.state.auth">
          <a @click="logout">Log Out</a>
          <form style="display:hidden" @submit.prevent="logout" id="logout">
            <input type="hidden" name="_token" :value="csrf_token">
          </form>
        </li>
        <li v-else>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import axios from 'axios';
import CustomFooter from './CustomFooter.vue';
export default {
  data() {
    return {
      csrf_token: window.csrf_token
    }
  },
  components: {
    CustomFooter
  },
  methods: {
    logout() {
      axios.post('/logout').then((res) => this.$router.push({ name: 'home' }))
    }
  }
}
</script>

<style>
  #toolbar {
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    box-shadow: 0 1px 5px rgba(0,0,0,.1);
  }
  #toolbar ul {
    display:flex;
    align-items: center;
    list-style: none;
    padding: 0 24px 0 0;
    margin: 0;
  }
  #toolbar a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  @media (max-width:373px) {
    #toolbar ul {
      padding-right: 12px
    }
  }
  #toolbar ul li {
    padding: 10px 10px 0 10px;
  }
  #toolbar ul li a {
    text-decoration: none;
    line-height: 1;
    color: inherit;
    font-size: 13px;
    padding-bottom: 8px;
    letter-spacing: .5px;
    cursor: pointer;
  }
  #toolbar ul li a:hover {
    border-bottom: 2px solid #484848;
    padding-bottom: 6px;
  }
</style>
