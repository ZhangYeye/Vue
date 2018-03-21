<template>
  <div class="login-container">
    <div class="header-container">
      <div class="header">
        <i class="iconfont icon-jiantouarrowhead7 jiantou"></i>
        <span class="zhuce">注册</span>
      </div>
      <div class="login-type">
        <div class="mima">
          <span>普通登录</span>
          <i class="iconfont icon-jiantouarrow492 show"></i>
        </div>
        <div class="name">
          <span>手机动态密码登录</span>
          <i class="iconfont icon-jiantouarrow492"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="form">
        <div class="phone">
          <i class="iconfont icon-iconfontshouji"></i>
          <input type="text" placeholder="手机/用户名/邮箱">
        </div>
        <div>
          <i class="iconfont icon-mimamw"></i>
          <input type="text" placeholder="输入密码">
        </div>
        <div class="forget">忘记密码？</div>
        <button>登录</button>
      </div>
    </div>
    <div class="parter">
      <span>合作网站登录</span>
      <div class="parter-img">
        <img src="../../common/images/zhifubao.png" alt="">
        <img src="../../common/images/qq.png" alt="">
      </div>
    </div>

  </div>
</template>
<script>

  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login-container
    .header-container
      height 174px
      background url('../../common/images/login-bg.png') no-repeat
      background-size 100%
      box-sizing border-box
      .header
        text-align center
        height 50px
        line-height 50px
        font-size 18px
        color #555
        overflow hidden
        .jiantou
          float left
          margin-left 10px
          font-size 20px
          color #bbb
        span
          float right
          margin-right 10px
          font-size 20px
          color #BCBCBC

      .login-type
        width 100%
        height 50px
        line-height 50px
        overflow hidden
        margin-top 75px
        background rgba(255,255,255,.4)
        >div
          display inline-block
          text-align center
          color #ffffff
          font-size 14px
          position relative
          .icon-jiantouarrow492
            position absolute
            top 20px
            left 80px
            color #ffffff
            display none
          .show
            display block
        .mima
          width 50%
          float left
        .name
          float right
          width 50%

    .content
        padding 20px 10px
        .form
          width 100%
          height 100%
          position relative
          >div
            position relative
            height 50px
            line-height 50px
            color #BCBCBC
            font-size 12px
            >.iconfont
              position absolute
              top -2px
              left 0
            >input
              position absolute
              top 15px
              left 30px
              outline none
              border none
              background #F5F5F5
          .forget
            position absolute
            right 5px
          >button
            margin-top 50px
            width 100%
            height 45px
            border-radius 7px
            background #4ABDAC
            color #ffffff
            font-size 14px
            font-weight bold
            outline none
            border none

    .parter
      width 100%
      text-align center
      color #BCBCBC
      margin-top 30px
      .parter-img
        height 60px
        text-align left
        img
          height 100%
          margin 20px

  //.header
</style>
