<template>
   <div v-if="errors" class="errors" style="background: red">
      <ul v-for="(error, index) in errors" :key="index">
        <li>{{ error[0] }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      errors: JSON.parse(window.errors)
    }
  }
}
</script>

<style>

</style>
