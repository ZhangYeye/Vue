<template>
  <div class="all-container">
    <EleHea title="全部分类"/>
    <div class="content">
      <div class="list">
        <p class="Pact">
          A
        </p>
        <ul class="brand-list">
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
        </ul>
        <!--<div class="no-brand" >
          没有该品牌产品！
        </div>-->
      </div>
      <div class="list">
        <p>
          B
        </p>
        <ul class="brand-list">
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
        </ul>
        <!--<div class="no-brand" >
          没有该品牌产品！
        </div>-->
      </div>
      <div class="list">
        <p>
          C
        </p>
        <ul class="brand-list">
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
          <li class="brand-item">
            <div class="brand-img">
              <img src="../../common/images/brand-item.jpg" >
            </div>
            <div class="name-address">
              <p class="name">爱喜雅</p>
              <p class="address">美国</p>
            </div>
          </li>
        </ul>
        <div class="no-brand" >
          没有该品牌产品！
        </div>
      </div>
    </div>
    <ul class="catalog">
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
      <li>F</li>
      <li>G</li>
      <li>H</li>
      <li>I</li>
      <li>J</li>
      <li>K</li>
      <li>L</li>
      <li>M</li>
      <li>N</li>
      <li>O</li>
      <li>P</li>
    </ul>
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
  .all-container

    .content
      width 100%
      .list
        width 100%
        >p
          height 30px
          background #eee
          padding 0 15px
          line-height 30px
          font-size 13px
          &.Pact
            color #ff0000
        .brand-list
          box-sizing border-box
          padding-right 20px
          .brand-item
            height 75px
            box-sizing border-box
            border-bottom 1px solid #eee
            padding 10px 0
            overflow hidden
            .brand-img
              float left
              height 100%
              box-sizing border-box
              margin 0 20px 0 10px
              width  100px
              border 1px solid #eee
              background #fff
              overflow hidden
              img
                height 100%
                margin 0 auto
                width auto;
            .name-address
              float left
              height 100%
              .name
                margin 5px 0 8px
              .address
                font-size 13px
                color #888
        .no-brand
          height 50px
          line-height 50px
          font-size 20px
          font-weight bold
          padding 0 20px

    .catalog
      position fixed
      z-index 100
      top 165px
      right 5px
      margin 20px 0
      >li
        height 20px
        line-height 10px
  //.ul
</style>
