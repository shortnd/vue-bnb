<template>
  <div class="home-container">
    <div v-for="(group, country, index) in listing_groups" :key="index" class="listing-summary-group">
      <h2>Places in {{ country }}</h2>
      <div class="listing-summaries">
        <listing-summary
          v-for="listing in group"
          :key="listing.id"
          :listing="listing"></listing-summary>
      </div>
    </div>
  </div>
</template>

<script>
import { groupByCountry } from "../helper.js";
import ListingSummary from './ListingSummary.vue';
import axios from 'axios';
import routeMixin from '../route-mixin.js';

export default {
  mixins: [ routeMixin ],
  components: {
    ListingSummary
  },
  data() {
    return { listing_groups: [] }
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
</style>
