<template>
  <div class="list-container">
    <div class="list-content">
      <Header />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  .list-container
    .list-content
      width 100%
      height 667px

</style>
