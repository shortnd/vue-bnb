<template>
  <div class="home-container">
    <listing-summary-group
      v-for="(group, country) in listing_groups"
      :key="country"
      :listings="group"
      :country="country"
      class="listing-summary-group"></listing-summary-group>
  </div>
</template>

<script>
import { groupByCountry } from "../helper.js";
import ListingSummaryGroup from './ListingSummaryGroup.vue';

export default {
  components: {
    ListingSummaryGroup
  },
  computed: {
    listing_groups() {
      return groupByCountry(this.$store.state.listing_summaries);
    }
  },
  methods: {
    assignData({ listings }) {
      this.listing_groups = groupByCountry(listings);
    }
  }
}
</script>

<style>
  .listing-summary-group {
    padding-bottom: 20px;
  }
  .listing-summaries {
    display:flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .listing-summaries > .listing-summary {
    margin-right: 15px;
  }
  .listing-summaries > .listing-summary:last-child {
    margin-right: 0;
  }
  .listing-carousel {
    position: relative;
  }
  .listing-carousel .controls {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: calc(50% - 45px);
    left: -45px;
    width: calc(100% + 90px);
  }
  .listing-carousel .controls .carousel-control {
    color: #c5c5c5;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .listing-summaries-wrapper {
    overflow: hidden;
  }
</style>
