<template>
  <div class="search-header">
    <header class="header">
      <span @click="goto('/list/item')" :class="{act:$route.path === '/list/item'}" >分类</span>
      <span @click="goto('/list/brand')" :class="{act:$route.path === '/list/brand'}">品牌</span>
      <span class="search">
          <i class="iconfont icon-weibiaoti10"></i>
    </span>
    </header>
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
  .search-header
    .header
      position fixed
      top 0
      right 0
      width 100%
      text-align center
      padding 15px 0
      bottom-border-1px(#BFBFBF)
      z-index 999
      background #ffffff
      >span
        margin 6px 5px
        padding 6px 10px
        font-size 14px
        margin-bottom 2px
        cursor pointer
        &.act
          color #ff0000
          border-bottom solid 2px #ff0000
      .search
        width 15px
        height 25px
        position absolute
        top 0
        right 0
        .iconfont
          width 25px
          height 25px
</style>
