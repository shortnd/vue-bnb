<template>
  <div class="listing-summary-group">
    <h2>Places in {{ country }}</h2>
    <div class="listing-carousel">
      <div class="controls">
        <carousel-control
          dir="left"
          @change-image="change"
          :style="leftArrowStyle"></carousel-control>
        <carousel-control
          dir="right"
          @change-image="change"
          :style="rightArrowStyle"></carousel-control>
      </div>
      <div class="listing-summaries-wrapper">
        <div class="listing-summaries">
          <listing-summary
            v-for="listing in listings"
            :key="listing.id"
            :listing="listing"
            :style="style">
            </listing-summary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingSummary from './ListingSummary.vue';
import CarouselControl from './CarouselControl.vue';

const rowSize = 3;
const listingSummaryWidth = 365;

export default {
  props: ['country', 'listings'],
  data() {
    return {
      offset: 0
    }
  },
  components: {
    ListingSummary,
    CarouselControl
  },
  methods: {
    change(val) {
      let newVal = this.offset + parseInt(val);
      if (newVal >= 0 && newVal <= this.listings.length - rowSize) {
        this.offset = newVal;
      }
    },
  },
  computed: {
    style() {
      return { transform: `translateX(${this.offset * -listingSummaryWidth}px)`}
    },
    leftArrowStyle() {
      return {
        visibility: (this.offset > 0 ? 'visible' : 'hidden')
      }
    },
    rightArrowStyle() {
      return {
        visibility: (this.offset < (this.listings.length - rowSize) ? 'visible' : 'hidden')
      }
    }
  }
}
</script>

<style>
  .listing-summary-group {
    padding-bottom: 20px;
  }
  .listing-summaries-wrapper {
    overflow: hidden;
  }
  .listing-summaries {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .listing-summaries > .listing-summary {
    margin-right: 15px;
    transition: transform .5s;
  }
  .listing-summaries > .listing-summary:last-child {
    margin-right: 0;
  }
</style>
