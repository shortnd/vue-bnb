<template>
  <div class="header">
    <div class="header-img"
      :style="headerImageStyle"
      @click="$emit('header-clicked')">
      <button class="view-photos">View Photos</button>
    </div><!--/.header-img-->
  </div><!--/.header-->
</template>

<script>
export default {
  props: ['imageUrl'],
  computed: {
    headerImageStyle() {
      return {
        'background-image': `url(${this.imageUrl})`
      };
    }
  }
}
</script>

<style>
.header{height:320px}
.header .header-img{background-repeat:no-repeat;background-size:cover;background-position:50% 50%;background-color:#f5f5f5;height:100%;cursor:pointer;position:relative}
button{border-radius:4px;border:1px solid #c4c4cf;text-align:center;vertical-align:middle;font-weight:700;line-height:1.43;user-select:none;white-space:nowrap;cursor:pointer;background:#fff;color:#484848;padding:7px 18px;font-size:14px;margin-bottom:0}
.header .header-img .view-photos{position:absolute;bottom:20px;right:20px}
</style>
