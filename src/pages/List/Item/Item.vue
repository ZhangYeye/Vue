<template>
  <div class="item-content" >
    <div class="left">
      <ul class="items">
        <li :class="{sel:index === currentIndex }" @click="setIndex(index)" class=" item-list"
            v-for="(menulist,index) in categorys" :key="index">{{menulist.name}}</li>
      </ul>
    </div>
    <div class="right" >
      <div>
        <div class="right-cata" v-for="(cata,index) in category" :key="index">
          <div class="content" v-if="cata.type === 0">
            <div class="name">
              <span class="list">{{cata.title}}</span>
              <span class="all">全部商品</span>
            </div>
            <ul class="good-list">
              <li v-for="(i,index2) in cata.list" :key="index2">
                <img :src="i.photo">
                <p>{{i.name}}</p>
              </li>
            </ul>
          </div>
          <div class="hot_brand" v-else>
            <div class="name">
              <span class="list">{{cata.title}}</span>
              <span class="all">全部商品</span>
            </div>
            <ul class="good-list">
              <li v-for="(j,index2) in cata.list" :key="index2">
                <img :src="j.logo">
                <p>{{j.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState,mapActions} from 'vuex'
  export default {
    data () {
      return {
        currentIndex:0
      }
    },
    computed:{
      ...mapState(['categorys']),
      category () {
        const {categorys,currentIndex} = this
        if(categorys.length){
          return categorys[currentIndex].cate_list
        }
      }
    },

    mounted () {
      this.getCategorys(() => {
        this.$nextTick(() =>{
          this._initScroll()
        })
      })
    },
    methods:{
      ...mapActions(['getCategorys']),
    /*  switchItem (event) {
        console.log('111')
        const items = [].slice.call(this.$refs.itemTabs.querySelectorAll('.item-list'));
        console.log(items)
        items.forEach(item=>{
          item.classList.remove('sel')
        })
        event.target.classList.add('sel')
      },*/
      _initScroll () {
        this.listScroll = new BScroll('.left',{click:true})
        this.ulScroll = new BScroll('.right',{click:true})
      },
      setIndex (index) {
        this.currentIndex = index
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .item-content
    width 100%
    position relative
    font-size 14px
    height 600px
    //background #C3C3C3
    .left
      width 25%
      height 600px
      position fixed
      top 45px
      left 0
      border-right 5px solid #ffffff
      box-sizing border-box
      .items
        width 100%
        background #C0C0C0
        .item-list
          padding 25px 5px
          text-align center
          background #ffffff
        .sel
          color #ff0000
          background #C0C0C0
    .right
      position fixed
      top 45px
      right 0
      width 73%
      height 600px
      background #ffffff
      box-sizing border-box
      .right-cata
        .content
          width 100%
          margin-bottom 20px
          .name
            position relative
            width 100%
            padding 10px 5px
            background #ffffff
            >span
              display inline-block
              color #888888
              font-size 10px
              height 20px
              line-height 20px
              margin 0 0 5px
              &.all
                float right
                padding-right 5px
          .good-list
            width 100%
            display flex
            flex-wrap wrap
            align-content  flex-start
            background #ffffff
            >li
              width 33.33%
              text-align center
              float left
              margin-bottom 15px
              >img
                width 100%


        .hot_brand
          width 100%
          .name
            position relative
            width 100%
            padding 10px 5px
            background #ffffff
            >span
              display inline-block
              color #888888
              font-size 10px
              height 20px
              line-height 20px
              margin 0 0 5px
              &.all
                float right
                padding-right 5px
          .good-list
            width 100%
            display flex
            flex-wrap wrap
            align-content  flex-start
            background #ffffff
            >li
              width 50%
              text-align center
              float left
              margin-bottom 15px
              box-sizing border-box
              padding 5px 15px
              box-sizing border-box
              padding 5px 15px
              >img
                width 100%



</style>
