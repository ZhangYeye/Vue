<template>
  <div class="first">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in dog_banner" :key="index">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      props:{
        dog_banner:Array
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    position relative
    width 100%
    height 160px
    .swiper-slide
      >img
        width 375px
    .swiper-pagination
      position absolute
      bottom 10px
      text-align center
      transform translate3d(0,0,0)
      >span
        display inline-block
        width 5px
        height 5px
        border-radius 4px
        background #ffffff
        &.swiper-pagination-bullet-active
          width 10px
          height 5px
          transition transform .3s ease
          transform scaleX(2)
</style>
