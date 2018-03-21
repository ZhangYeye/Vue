<template>
  <div class="list-container">
    <div class="container">
      <Header/>
      <div class="content">
        <div class="left">
          <ul>
            <li>为您推荐</li>
            <li>狗狗主粮</li>
            <li>狗狗零食</li>
            <li>为您推荐</li>
            <li>狗狗主粮</li>
            <li>狗狗零食</li>
            <li>为您推荐</li>
            <li>狗狗主粮</li>
            <li>狗狗零食</li>
            <li>为您推荐</li>
            <li>狗狗主粮</li>
            <li>狗狗零食</li>
          </ul>
        </div>
        <div class="right">
          <div class="container">
            <div class="name">
              <span class="list">热门分类</span>
              <span class="all">全部商品</span>
            </div>
            <ul class="good-list">
              <li>
                <img src="../../common/images/e9d557ad275060a67574834a21aecf15.jpg" alt="">
                <p>强化免疫</p>
              </li>
              <li>
                <img src="../../common/images/e9d557ad275060a67574834a21aecf15.jpg" alt="">
                <p>强化免疫</p>
              </li>
              <li>
                <img src="../../common/images/e9d557ad275060a67574834a21aecf15.jpg" alt="">
                <p>强化免疫</p>
              </li>
              <li>
                <img src="../../common/images/e9d557ad275060a67574834a21aecf15.jpg" alt="">
                <p>强化免疫</p>
              </li>
              <li>
                <img src="../../common/images/e9d557ad275060a67574834a21aecf15.jpg" alt="">
                <p>强化免疫</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '../../components/Header/Header.vue'
  export default {
    methods:{
      goto (path) {
        this.$router.replace(path)
      }
    },
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
      position relative
      font-size 14px
      height 100%
      .left
        width 25%
        position absolute
        top 0
        left 0
        margin-right 2px
        >ul
          width 100%
          >li
            padding 25px 15px
          &.target
            color #ff0000
            background#868686
      .right
        position absolute
        top 0
        right 0
        width 75%
        background #ffffff
        .container
          width 100%
          height 100%

          .name
            position relative
            width 100%
            padding 10px 5px
            >span
              display inline-block
              color #888888
              font-size 10px
              height 20px
              line-height 20px
              margin 0 0 5px
              //&.list

              &.all
                float right
                padding-right 15px
          .good-list
            width 100%
            display flex
            flex-wrap wrap
            background #ffffff
            >li
              width 33.33%
              text-align center
              float left
              >img
                width 100%


</style>
