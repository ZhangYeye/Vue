<template>
  <div>
    <div class="haohuo" v-for="(hao,index) of haohuo" :key="index">
      <div class="left">

        <a href="javascript:;"
           v-for="(l,index1) in hao.left" :key="index1">
          <img :src="l" alt="">
        </a>

      </div>
      <div class="right">
        <a href="javascript:;"
           v-for="(r,index1) in hao.right" :key="index1">
          <img :src="r" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      haohuo:Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .haohuo
    width 100%
    display flex
    flex-wrap wrap
    .left
      width 50%
      img
        width 100%
        display block
    .right
      width 50%
      img
        width 100%
        display block
</style>
