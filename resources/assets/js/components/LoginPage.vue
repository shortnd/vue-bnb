<template>
  <div id="login" class="login-container">
    <errors/>
    <form role="form" method="POST" action="/login">
      <input type="hidden" name="_token" :value="csrf_token">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required autofocus>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
      </div>
      <div class="form-control">
        <button type="submit">Log In</button>
      </div>
    </form>
    <div>
      Don't have an account <router-link :to="{ name: 'register' }">Register</router-link> for a new one
    </div>
  </div>
</template>

<script>
import Errors from './Errors.vue'

export default {
  components: {
    Errors
  },
  data() {
    return {
      csrf_token: window.csrf_token,
    }
  },
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
