<template>
  <div id="login" class="login-container">
    <form @submit.prevent="login">
      <input type="hidden" name="_token" :value="csrf_token">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required autofocus>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
      </div>
      <div class="form-control">
        <button type="submit">Log In</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      csrf_token: window.csrf_token
    }
  },
  methods: {
    login() {
      axios.post('/login', {
        email: this.email,
        password: this.password
      }).then((res) => {
        this.$router.push({ name: 'home' })
      }).catch(e => {
        console.log({ e });
      })
    }
  }
}
</script>

<style>
  #login form {
    padding-top: 40px;
  }
  @media (min-width:744px) {
    #login form {
      padding-top:80px;
    }
  }
  #login .form-control {
    margin-bottom: 1em;
  }
  #login input[type=email],
  #login input[type=password],
  #login button,
  #login label {
    width: 100%;
    font-size: 19px!important;
    line-height: 24px;
    color: #484848;
    font-weight: 300;
  }
  #login input {
    background-color: transparent;
    padding: 11px;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    box-sizing: border-box;
  }
  #login button {
    background: #4fc08d;
    color: #ffffff;
    cursor: pointer;
    border: #4fc08d;
    border-radius: 4px;
    padding-top: 12px;
    padding-bottom: 12px;
  } 

</style>
