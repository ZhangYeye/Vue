<template>
  <div class="container-brand">
    <div class="content">
      <div class="list" v-for="(br,index) in brand" :key="index">
        <span>———— {{br.title}} ————</span>
        <ul>
          <li v-for="(j,index1) in br.list" :key="index1">
            <img :src="j.logo" alt="">
            <span>{{j.address}}</span>
            <span>{{j.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="show-all" @click="$router.push('/allbrands')">全部</div>
  </div>
</template>
<script>
  import Header from '../../../components/Header/Header.vue'
  import Bsroll from 'better-scroll'
  import {mapState,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapState(['brand'])
    },
    mounted () {
      this.getBrand(() =>{
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    methods:{
      ...mapActions(['getBrand']),
      _initScroll () {
        this.brandScroll = new Bsroll('.container-brand',{click:true})
      },
    },
    components:{
      Header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .container-brand
    width 100%
    height 667px
    .content
      width 100%
      text-align center
      padding-top 20px
      padding-bottom 60px
      .list
        margin-bottom 20px
        >span
          color #888888
          margin-top 10px
        >ul
          display flex
          flex-wrap wrap
          Width 100%
          padding 0 10px
          margin-top 25px
          li
            Width 25%
            text-align center
            float left
            margin-left 18px
            margin-bottom 20px
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
