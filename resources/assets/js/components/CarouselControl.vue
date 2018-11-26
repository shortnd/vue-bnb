<template>
  <i :class="classes" @click="clicked"></i>
</template>

<script>
export default {
  props: ['dir'],
  computed: {
    classes() {
      return 'carousel-control fa fa-2x fa-chevron-' + this.dir;
    }
  },
  methods: {
    clicked() {
      this.$emit('change-image', this.dir === 'left' ? -1 : 1);
    }
  }
}
</script>

<style>
.carousel-control{padding:1em;color:#fff;opacity:.85;cursor:pointer}
@media (min-width:744px) {
  .carousel-control{font-style:3rem}
}
</style>
