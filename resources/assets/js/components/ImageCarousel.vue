<template>
  <div class="image-carousel">
    <img :src="image" alt="Listing Image">
    <div class="controls">
      <carousel-control
        dir="left"
        @change-image="changeImage"></carousel-control>
      <carousel-control
        dir="right"
        @change-image="changeImage"></carousel-control>
    </div>
  </div>
</template>

<script>
import CarouselControl from './CarouselControl.vue';
export default {
  props: ['images'],
  data() {
    return {
      index: 0
    };
  },
  components: {
    CarouselControl
  },
  computed: {
    image() {
      return this.images[this.index];
    }
  },
  methods: {
    changeImage(val) {
      let newVal = this.index + parseInt(val);
      if (newVal < 0) {
        this.index = this.images.length -1;
      } else if (newVal === this.images.length) {
        this.index = 0;
      } else {
        this.index = newVal;
      }
    }
  },
  components: {
    CarouselControl
  }
}
</script>

<style>
.image-carousel img{max-width:100%}
.image-carousel{height:100%;margin-top:-12vh;position:relative;display:flex;align-items:center;justify-content:center}
.image-carousel .controls{position:absolute;width:100%;display:flex;justify-content:space-between}
</style>
