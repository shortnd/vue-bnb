<template>
  <div>
    <header-image
      v-if="listing.images[0]"
      :image-url="listing.images[0]"
      :id="listing.id"
      @header-clicked="openModal"></header-image>
      <div class="listing-container">
        <div class="heading">
          <h1>{{ listing.title }}</h1>
          <p>{{ listing.address }}</p>
        </div>
        <hr>
        <div class="about">
          <h2>About this listing</h2>
          <expandable-text>{{ listing.about }}</expandable-text>
        </div>
        <div class="lists">
          <feature-list title="Amenities" :items="listing.amenities">
            <template slot-scope="amenity">
              <i class="fa fa-lg" :class="amenity.icon"></i>
              <span>{{ amenity.title }}</span>
            </template>
          </feature-list>
          <feature-list title="Prices" :items="listing.prices">
            <template slot-scope="price">
              {{ price.title }}: <strong>{{ price.value }}</strong>
            </template>
          </feature-list>
        </div>
      </div>
      <modal-window ref="imagemodal">
        <image-carousel :images="listing.images"/>
      </modal-window>
  </div>
</template>

<script>
import { populateAmenitiesAndPrices } from "../helper.js";

import HeaderImage from './HeaderImage.vue';
import ImageCarousel from './ImageCarousel.vue';
import ModalWindow from './ModalWindow.vue';
import FeatureList from './FeatureList.vue';
import ExpandableText from './ExpandableText.vue';
export default {
  components: {
    HeaderImage,
    ImageCarousel,
    ModalWindow,
    FeatureList,
    ExpandableText,
  },
  computed: {
    listing() {
      let listing = this.$store.state.listings.find(
        listing => listing.id == this.$route.params.listing
      )
      return populateAmenitiesAndPrices(listing);
    }
  },
  methods: {
    assignData({ listing }) {
      Object.assign(this.$data, populateAmenitiesAndPrices(listing));
    },
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    }
  }
}
</script>

<style>

</style>
