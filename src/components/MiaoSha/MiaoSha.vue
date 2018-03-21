<template>
  <div class="miaosha">
    <div class="miao-time">
      <div class="left">
        <img src="../../common/images/fengqiang.png" alt="">
      </div>
      <div class="time">
        <span>本场结束</span>
        <span class="ts">20</span>
        <span>：</span>
        <span class="ts">00</span>
      </div>
      <div class="more"></div>
    </div>
    <div class="miao-container">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <img src="../../common/images/goods-item.jpg" alt="">
            <span class="price"><p>¥9.60</p></span>
            <span class="save">省17.70</span>
          </li>
          <li class="swiper-slide">
            <img src="../../common/images/goods-item.jpg" alt="">
            <span class="price"><p>¥9.60</p></span>
            <span class="save">省17.70</span>
          </li>
          <li class="swiper-slide">
            <img src="../../common/images/goods-item.jpg" alt="">
            <span class="price"><p>¥9.60</p></span>
            <span class="save">省17.70</span>
          </li>
          <li class="swiper-slide">
            <img src="../../common/images/goods-item.jpg" alt="">
            <span class="price"><p>¥9.60</p></span>
            <span class="save">省17.70</span>
          </li>
          <li class="swiper-slide">
            <img src="../../common/images/goods-item.jpg" alt="">
            <span class="price"><p>¥9.60</p></span>
            <span class="save">省17.70</span>
          </li>
          <li class="swiper-slide">
            <img src="../../common/images/goods-item.jpg" alt="">
            <span class="price"><p>¥9.60</p></span>
            <span class="save">省17.70</span>
          </li>
        </ul>
    </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .miaosha
    width 100%
    .miao-time
      zoom 1
      padding 10px
      height 22px
      line-height 22px
      .left
        float left
        width 25%
        img
          width 85px
          height 20px
          vertical-align middle
      .time
        float: left;
        text-align: center;
        font-size: 13px;
        width: 40%;
        margin-left: 20%;
        >span
          font-size 14px
          color #666666
          padding 0 2px
          &.ts
            border solid 1px #000
      .more
        float: left;
        width: 15%;
        height: 100%;
        background: url('../../common/images/more.png') no-repeat;
        background-size: auto 34px;
        background-position: -15px -8px;
    .swiper-container
      width 100%
      .swiper-slide
        width 100px
        text-align center
        img
          width 100%
          margin-bottom 10px
        span
          margin 10px 0
</style>
