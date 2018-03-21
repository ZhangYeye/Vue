<template>
  <div class="container">
    <Header/>
    <div class="content">
      <div class="list">
        <span>———— 推荐品牌 ————</span>
        <ul>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
          <li>
            <img src="../../common/images/brand-item.jpg" alt="">
            <span>美国</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="show-all" @click="$router.push('/allbrands')">
      全部
    </div>
  </div>
</template>
<script>
  import Header from '../../components/Header/Header.vue'
  export default {

    components:{
      Header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .container
    width 100%
    height 100%
    .content
      width 100%
      height 100%
      text-align center
      padding-top 20px
      .list
        margin-bottom 10px
        >span
          color #888888
          margin-bottom 20px
        >ul
          display flex
          flex-wrap wrap
          Width 100%
          padding 0 10px
          li
            Width 25%
            text-align center
            float left
            margin-right 25px
            img
              width 100%
    .show-all
      position fixed
      right 15px
      bottom 65px
      width 40px
      height 40px
      background rgba(0,0,0,.5)
      border-radius 50%
      line-height 40px
      text-align center
      font-size 13px
      color #fff
      //li
</style>
