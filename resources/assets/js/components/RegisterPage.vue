<template>
  <div class="login-container">
    <errors/>
    <form id="register" action="/register" method="post">
      <input type="hidden" name="_token" :value="csrf_token">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required autofocus>
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
      </div>
      <div class="form-control">
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" name="password_confirmation" id="password_confirmation">
      </div>
      <div class="form-control">
        <button type="submit">Log In</button>
      </div>
    </form>
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
      csrf_token: window.csrf_token
    }
  }
}
</script>

<style>
  #register form {
    padding-top: 40px;
  }
  @media (min-width:744px) {
    #register form {
      padding-top:80px;
    }
  }
  #register .form-control {
    margin-bottom: 1em;
  }
  #register input[type=text],
  #register input[type=email],
  #register input[type=password],
  #register button,
  #register label {
    width: 100%;
    font-size: 19px!important;
    line-height: 24px;
    color: #484848;
    font-weight: 300;
  }
  #register input {
    background-color: transparent;
    padding: 11px;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    box-sizing: border-box;
  }
  #register button {
    background: #4fc08d;
    color: #ffffff;
    cursor: pointer;
    border: #4fc08d;
    border-radius: 4px;
    padding-top: 12px;
    padding-bottom: 12px;
  } 
</style>
