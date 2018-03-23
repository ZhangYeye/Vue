<template>
  <div class="header-item">
    <div class="header-ele">
      <i class="iconfont icon-jiantouarrowhead7 jiantou"
         @click="$router.back()"></i>
      {{title}}
      <i class="iconfont icon-gallery fenlei" @click="toggleDetail"></i>
    </div>
    <transition name="collapse">
      <div class="show-detail" v-if="showDetail">
        <div class="nav-item">
          <i class="iconfont icon-xiazai45"></i>
          <p class="text">首页</p>
        </div>
        <div class="nav-item">
          <i class="iconfont icon-icon04"></i>
          <p class="text">商品分类</p>
        </div>
        <div class="nav-item">
          <i class="iconfont icon-gouwuche"></i>
          <p class="text">购物车</p>
          <span class="num"></span>
        </div>
        <div class="nav-item">
          <i class="iconfont icon-wodezhanghu"></i>
          <p class="text">我的E宠</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "ele-header",
    props:{
      title:{
        type:String,
        required:true,
      }
    },
    data(){
      return {
        showDetail:false,
      }
    },
    methods:{
      toggleDetail(){
        this.showDetail = !this.showDetail
      },
      back () {

      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .header-item
    width 100%
    position fixed
    top 0
    z-index 500
    .header-ele
      width 100%
      text-align center
      height 45px
      line-height 45px
      font-size 18px
      border-bottom 1px solid gray
      color #555
      background #ffffff
      .jiantou
        float left
        margin-left 10px
        font-size 20px
        color #bbb
      .fenlei
        float right
        margin-right 10px
        font-size 20px
        color #bbb
    .show-detail
      padding-top 5px
      height 50px
      display flex
      box-sizing border-box
      border-bottom 1px solid gray
      overflow hidden
      background #fff
      .nav-item
        flex 1
        text-align center
        .iconfont
          font-size 22px
        .text
          font-size 16px
      &.collapse-enter,&.collapse-leave-to
        height 0
      &.collapse-enter-active,&.collapse-leave-active
        transition height .5s linear
</style>
