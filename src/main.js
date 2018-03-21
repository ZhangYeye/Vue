import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入加载mockServer数据
import './mock/mockServer'

new Vue({
  el:'#app',
  router,
  render:h => h(App)
})

