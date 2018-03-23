<template>
  <div class="login-container">
    <div class="header-container">
      <div class="header">
        <i class="iconfont icon-jiantouarrowhead7 jiantou" @click="$router.back()"></i>
        <span class="zhuce">注册</span>
      </div>
      <div class="login-type">
        <div class="mima" @click="setLoginType(true)">
          <span>普通登录</span>
          <i class="iconfont icon-jiantouarrow492 " :class="{show:LoginType}"></i>
        </div>
        <div class="name" @click="setLoginType(false)">
          <span>手机动态密码登录</span>
          <i class="iconfont icon-jiantouarrow492" :class="{show:!LoginType}"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="form">
        <!--手机号登录-->
        <div class="type phone-login" :class="{setType:LoginType}">
          <div class="phone">
            <i class="iconfont icon-iconfontshouji" ></i>
            <input type="text" maxlength="11" placeholder="手机/用户名/邮箱" v-model="phone">
          </div>
          <div>
            <i class="iconfont icon-mimamw"></i>
            <input type="text" placeholder="输入密码" v-model="pwd">
          </div>
        </div>
        <!--用户密码登录-->
        <div class="type message-login" :class="{setType:!LoginType}">
          <div class="phoned">
            <i class="iconfont icon-iconfontshouji"></i>
            <input type="text" maxlength="11" placeholder="已注册的手机号" v-model="phone">
          </div>
          <div class="imgCode">
            <i class="iconfont icon-mimamw"></i>
            <input type="text" placeholder="请输入图片内容" v-model="code">
            <div class="Code" ><img src="http://localhost:3000/captcha" alt="" @click="getcaptcha"></div>
          </div>
          <div class="reactCode">
            <i class="iconfont icon-mimamw"></i>
            <input type="text" placeholder="动态密码" v-model="actpwd">
            <button v-show="!computedTime" class="getCode" :class="{right_phone:rightPhone}"
                    @click="getActCode">获取动态密码</button>
            <button v-show="computedTime" disabled="disabled" class="getCode">{{computedTime}}s</button>
          </div>
        </div>
        <p class="forget">忘记密码？</p>
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
    <AlertTip v-if="showAlert" @closeTip="closeTip"/>
  </div>
</template>
<script>
  import {sendCode} from '../../api'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  export default {
    data () {
      return{
        LoginType :true,
        computedTime:0,
        phone:'',
        pwd:'',
        code:'',
        actpwd:'',
        showAlert:false,
        alertText:''
      }
    },
    computed:{
      rightPhone () {
//        以1开头的11 位数
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      setLoginType (LoginType) {
        this.LoginType = LoginType
      },
      closeTip () {
        this.showAlert = false
      },
      getcaptcha (event) {
        event.target.src = 'http://localhost:3000/captcha?time='+new Date()
      },

      /*点击获取开始倒计时*/
      async getActCode () {
        //开始倒计时
        if(this.rightPhone){
          this.computedTime = 60
          // 启动循环定时器
          const intervalId = setInterval(() => {
            this.computedTime--
            // 如果到时停止计时
            if(this.computedTime === 0){
              clearInterval(intervalId)
            }
          },1000)
          // 发送ajax请，像手机发送验证码
         /* const result = await sendCode(this.phone)
          if(result.code === 1){
            clearInterval(intervalId)
            // 显示提示框
            this.showAlert = true
            this.alertText = result.msg
          }*/
        }
      }
    },
    components:{
      AlertTip
    }

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
          type
          >div
            display none
            &.setType
              display block
            &.phone-login
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
                  line-height 50px
                  height 50px
                  top 0px
                  left 30px
                  outline none
                  border none
                  background #F5F5F5
            &.message-login
              >div
                position relative
                height 50px
                line-height 50px
                color #BCBCBC
                font-size 12px
                &.imgCode
                  .Code
                    position absolute
                    top 14px
                    right 10px
                    display inline-block
                    width 90px
                    height 60px
                    >img
                      width 100%
                &.reactCode
                  position relative
                  .getCode
                    position absolute
                    /*padding 5px 10px*/
                    box-sizing border-box
                    border 1px solid #ffffff
                    color #000
                    border-radius 4px
                    background transparent
                    top 14px
                    right 10px
                    &.right_phone
                      background #4ABDAC
                      color #fff

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
