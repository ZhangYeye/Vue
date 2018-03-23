<template>
  <div class="footer">
    <span class="guide_item" :class="{on:$route.path === '/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-xiazai45"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:$route.path === '/list/item' || $route.path === '/list/brand'}"
          @click="goto('/list')">
      <span class="item_icon">
        <i class="iconfont icon-icon04"></i>
      </span>
      <span>列表</span>
    </span>
    <span class="guide_item" :class="{on:$route.path === '/cart'}" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:$route.path === '/mine'}" @click="goto('/mine')">
      <span class="item_icon">
        <i class="iconfont icon-wodezhanghu"></i>
      </span>
      <span>我的E宠</span>
    </span>
  </div>
</template>
<script>
  export default {

    methods:{
      goto (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .footer  //footer
    top-border-1px(#e7e7e7)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    padding-bottom 2px
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        /*color #53ff53*/
        color #548c00
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
