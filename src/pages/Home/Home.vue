<template>
  <div class="container">
    <!--头部-->
    <div class="header">
      <div class="ad">
        <img src="../../common/images/adv.jpg">
      </div><!--广告-->
      <div class="address">
        <span class="area">狗狗 | 北京
          <i class="iconfont icon-xiangxia"></i>
        </span>
        <span class="search">
          <span>搜索商品和品牌</span>
          <i class="iconfont icon-msnui-search"></i>
        </span>
        <span class="call">
          <i class="iconfont icon-comments"></i>
        </span>
      </div><!--地址跳转-->
      <div class="swiper-container nav">
        <ul class="swiper-wrapper">
          <li class="swiper-slide on">首页</li>
          <li class="swiper-slide">狗狗主粮</li>
          <li class="swiper-slide">服饰城</li>
          <li class="swiper-slide">医疗保健</li>
          <li class="swiper-slide">零时玩具</li>
          <li class="swiper-slide">日用外出</li>
          <li class="swiper-slide">美食香波</li>
        </ul>
      </div><!--首页导航-->
    </div>
    <!--主体-->
    <div class="home-container">
      <div class="content">
        <!--第一个轮播-->
        <SwiperContainer/>
        <!--主体图片-->
        <div class="dogImg">
          <img src="../../common/images/dog.jpg" alt=""></div><div class="navlist">
        <ul class="item">
          <li><img src="../../common/images/5a6991defe3616bb1208506f5f0d78da.jpg" alt=""></li>
          <li><img src="../../common/images/420a7f62887b490aa7c627dc5364178d.jpg" alt=""></li>
          <li><img src="../../common/images/b799562d3f7f8ca39769dc5fd1794a4a.jpg" alt=""></li>
          <li><img src="../../common/images/dfa5a7598e3ee203c05f0f03fc182edc.jpg" alt=""></li>
          <li><img src="../../common/images/038add951408054bafb01498e8d98635.jpg" alt=""></li>
          <li><img src="../../common/images/5a6991defe3616bb1208506f5f0d78da.jpg" alt=""></li>
          <li><img src="../../common/images/420a7f62887b490aa7c627dc5364178d.jpg" alt=""></li>
          <li><img src="../../common/images/b799562d3f7f8ca39769dc5fd1794a4a.jpg" alt=""></li>
          <li><img src="../../common/images/dfa5a7598e3ee203c05f0f03fc182edc.jpg" alt=""></li>
          <li><img src="../../common/images/038add951408054bafb01498e8d98635.jpg" alt=""></li>
        </ul>


      </div><!--菜单-->
        <StaImg/>
        <!--秒杀-->
        <MiaoSha/>
        <StaImg/>
        <!--品牌-->
        <div class="pinpai">
          <img src="../../common/images/bg_gif.gif" alt="">
        </div>
        <StaImg/>
        <!--VIP列表-->
        <SwiperContainer/>
        <StaImg/>
        <!--大牌好货-->
        <Haohuo/>
        <StaImg/>
        <!--最惨状-->
        <div class="bad">
          <img src="../../common/images/zuicanjiang-content.jpg@.jpg" alt="">
        </div>
        <StaImg/>
        <!--特别星球-->
        <div class="special">
          <div class="left"><img src="../../common/images/left.jpg" alt=""></div>
          <div class="right">
            <img src="../../common/images/right-1.jpg" alt="">
            <img src="../../common/images/right-2.jpg" alt="">
          </div>
        </div>
        <StaImg/>
        <!--特色栏目-->
        <Lanmu/>
        <div class="company">
          <p class="tabs">
            <span class="cur">触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </p>
          <p class="copyrights">
          <span>©wap.epet.com
           <span class="text">版权:重庆易宠科技有限公司</span>
          </span>
          </p>
        </div>
        <div class="switch">
          <div class="miao"><img src="" alt=""></div>
        </div>
      </div>
    </div>
    <div class="catoon"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import Bscroll from 'better-scroll'

  /*引入组件*/
  import SwiperContainer from '../../components/SwiperContainer/SwiperContainer.vue'
  import StaImg from '../../components/StaImg/StaImg.vue'
  import MiaoSha from '../../components/MiaoSha/MiaoSha.vue'
  import Haohuo from '../../components/Haohuo/Haohuo.vue'
  import Lanmu from '../../components/Lanmu/Lanmu.vue'
  export default {
    mounted () {
      new Swiper('.first>.swiper-container', {
        loop:true,
        pagination:{
          el:'.swiper-pagination'
        },
        autoplay:{
          delay:2500,
          disableOnInteraction:false,
        },

      })
      new Swiper('.nav', {
        slidesPerView: 5,
        spaceBetween: 20,
      });
      new Swiper('.miao-container>.swiper-container',{
        slidesPerView: 3.5,
        spaceBetween: 10,
      });

    },

    components:{
      SwiperContainer,
      StaImg,
      MiaoSha,
      Haohuo,
      Lanmu
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .container
    width 100%
    height 100%
    .header
      width 100%
      .ad
        width 100%
        height 60px
        img
          width 100%
          height 60px
      .address
        width 100%
        height 50px
        padding 0 10px
        box-sizing border-box
        line-height 50px
        overflow hidden
        >span
          color #898989
          font-size 14px
          padding-left 5px
          &.area
            float left
            .icon-xiangxia
              display inline
          &.search
            display inline-block
            width 215px
            height 25px
            margin-left 15px
            background #e9e9e9
            border-radius 5px
            margin-top 13px
            line-height 25px
            overflow hidden
            >span
              height 25px
              background #e9e9e9
              float left
            .icon-msnui-search
              float right
          &.call
            flex 1
            float right


      .nav
        width 100%
        height 45px
        ul
          li
            width 40px
            display inline-block
            font-size 14px
            text-align center
            line-height 40px
            &.on
              color #67AF5B
              border-bottom 3px solid #67AF5B
    .content
      width 100%
      height 100%
      .first
        width 100%
        height 160px
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
              background #ffffff
              &.swiper-pagination-bullet-active
                width 8px
                height 5px
                transition transform .3s ease
                transform scaleX(2)
      .dogImg
        width 100%
        img
          width 100%
          height 270px
      .navlist
        width 100%
        ul
          overflow hidden
          display flex
          flex-wrap wrap
          background #000
          bottom-border-1px(#ffffff)
          li
            float left
            flex 1
            vertical-align middle
            img
              width 75px
              height 94px
      .pinpai
        img
          width 100%
      .bad
        width 100%
        img
            width 100%
      .special
        width 100%
        display flex
        background #000
        .left
          width 50%
          img
            width 100%
            display block
        .right
          width 50%

          img
            width 100%
            height 50%
            display block

      .company
        width 100%
        margin 20 auto
        padding-bottom 60px
        text-align center
        p
          line-height 30px
          &.tabs
            padding 0 25px
            margin-top 20px
            display flex
            >span
              text-align center
              margin 0 10px
              flex 1
              &.cur
                color #ff0000
          &.copyrights
              display inline

              >span
                display inline-block

    .catoon
      position: fixed;
      right: 0;
      bottom: 100px;
      z-index 200
      width: 41px;
      height: 46px;
      background-image: url('../../common/images/godog.png');
      background-size: 82px 46px;
      background-repeat: no-repeat;
      background-position 0 0
      animation blink 2s steps(1) infinite
      @keyframes blink {
        0% {
          background-position 0 0
        }
        50% {
          background-position 100% 0
        }
      }
</style>
