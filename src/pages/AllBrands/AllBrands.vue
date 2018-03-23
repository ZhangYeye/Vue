<template>
  <div class="all-container">
    <EleHea title="全部分类"/>
    <div class="br">
      <div class="content" ref="brandUl">
        <div class="list" v-for="(bs,index) in allbrands.brand" :key="index">
          <p class="Pact">
            {{bs.order}}
          </p>
          <ul class="brand-list">
            <li class="brand-item" v-for="(i,index) in bs.list" :key="index">
              <div class="brand-img">
                <img :src="i.logo" >
              </div>
              <div class="name-address">
                <p class="name">{{i.name}}</p>
                <p class="address">{{i.name}}</p>
              </div>
            </li>
          </ul>
          <!--<div class="no-brand" >
            没有该品牌产品！
          </div>-->
        </div>
      </div>
    </div>
    <ul class="catalog">
      <li  v-for="(j,index) in allbrands.brand" :key="index"
        :class="{rs:index === currentIndex}" @click="selectCurrent(index)">{{j.order}}</li>
    </ul>
  </div>
</template>
<script>
  import BSroll from 'better-scroll'
  import {mapActions,mapState} from 'vuex'
  import EleHea from '../../components/EleHea/EleHea.vue'
  export default {
    data () {
      return {
        tops:[],
        scrollY:0,
      }
    },
    computed:{
      ...mapState(['allbrands']),
      currentIndex () {
        const {tops,scrollY} = this
        return tops.findIndex((top,index) => scrollY >= top && scrollY < tops[index+1])
      }
    },
    mounted () {
      this.getAllBrands(() => {
        this.$nextTick(() => {
          this._initScroll()
          this._initTop()
        })
      })
    },
    methods:{
      ...mapActions(['getAllBrands']),

      _initScroll () {
        this.brandScroll = new BSroll('.br',{click:true,probeType:2})
        // 监视滑动过程
        this.brandScroll.on('scroll',(pos) => {
          this.scrollY = Math.abs(pos.y)
        })
      },
      _initTop () {
        const tops=[]
        let top = 0
        tops.push(top)
        const lis = this.$refs.brandUl.getElementsByClassName('list')
        ;[].slice.call(lis).forEach((li,index) => {
          top += li.clientHeight
          tops.push(top)
        })
        this.tops = tops
        console.log(this.tops)
      },
      selectCurrent (index) {
        const top = this.tops[index]
        this.scrollY = top
        this.brandScroll.scrollTo(0,-top,300)
      }
    },
    components:{
      EleHea
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .all-container
    .br
      height 667px
      .content
        width 100%
        padding-top 45px
        .list
          width 100%
          >p
            height 30px
            background #eee
            padding 0 15px
            line-height 30px
            font-size 13px
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
                width  90px
                padding 5px 10px
                border 2px solid #ccc
                background #fff
                //overflow hidden
                >img
                  height 100%
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
      top 125px
      height 400px
      right 5px
      margin 20px 0
      >li
        height 15px
        line-height 15px

        &.rs
          color #ff0000
  //.ul
</style>
