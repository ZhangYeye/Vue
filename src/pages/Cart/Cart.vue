<template>
  <div>
    <EleHea title="购物车"/>
    <div class="content-cart">
      <div class="cartfont">
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <p class="msg">购物车是空的</p>
      <div class="link-tab">
        <button class="goshopping">
          去逛逛
        </button>
        <button class="save">
          我的收藏
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import EleHea from '../../components/EleHea/EleHea.vue'
  export default {

    components:{
      EleHea
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .content-cart
    text-align center
    .cartfont
      margin-top 80px
      .iconfont
        font-size 150px
        color #ccc
    .msg
      font-size 20px
      color #bbb
      margin 20px 0 20px 10px
    .link-tab
      button
        width 150px
        height 50px
        border-radius 5px
        background transparent
        border 1px solid #888
        color #aaa
</style>
