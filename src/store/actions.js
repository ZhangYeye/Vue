
/*异步分发actions获取数据*/
import {
  RECEIVE_HOME,
  RECEIVE_ALLBRANDS,
  RECEIVE_BRAND,
  RECEIVE_ITEM
}
from './mutation-types'
import {
  reqHome,
  reqItem,
  reqBrand,
  reqAllBrand
} from '../api'

export default {
  // 异步获取首页的数据
  async getHomePages ({commit},callback) {
    const result = await reqHome()
    if(result.code === 0){
      commit(RECEIVE_HOME,{data:result.data})
      callback && callback()
    }
  },
  // 异步获取分类列表数据
  async getCategorys ({commit},callback) {
    const result = await reqItem()
    if(result.code === 0) {
      commit(RECEIVE_ITEM,{data:result.data})
      callback && callback()
    }
  },

  // 异步获取品牌数据
  async getBrand ({commit},callback) {
    const result = await reqBrand()
    if(result.code === 0){
      commit(RECEIVE_BRAND,{data:result.data})
      callback && callback()
    }
  },
  // 异步获取所有的品牌

  async getAllBrands ({commit},callback){
    const result = await reqAllBrand()
    if(result.code === 0 ){
      commit(RECEIVE_ALLBRANDS,{data:result.data})
      callback && callback()
    }
  }
}

