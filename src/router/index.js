import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import List from '../pages/List/List.vue'
import Cart from '../pages/Cart/Cart.vue'
import Mine from '../pages/Mine/Mine.vue'
import Item from '../pages/List/Item/Item.vue'
import Brand from '../pages/List/Brand/Brand.vue'
import AllBrands from '../pages/AllBrands/AllBrands.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        FooterType:true
      }
    },
    {
      path:'/list',
      component:List,
      meta: {
        FooterType:true
      },
      children:[
        {
          path:'/list/brand',
          component:Brand,
          meta: {
            FooterType:true
          },
        },
        {
          path:'/list/item',
          component:Item,
          meta: {
            FooterType:true
          },
        },
        {
          path:'/',
          redirect:'/list/item'
        },
      ]
    },


    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/allbrands',
      component:AllBrands
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})


