import {
  RECEIVE_ALLBRANDS,
  RECEIVE_BRAND,
  RECEIVE_ITEM,
  RECEIVE_HOME
} from './mutation-types'

export default {
  [RECEIVE_HOME](state,{data}){
    state.homepage = data
  },
  [RECEIVE_ITEM](state,{data}){
    state.categorys = data
  },
  [RECEIVE_BRAND](state,{data}){
    state.brand = data
  },
  [RECEIVE_ALLBRANDS](state,{data}){
    state.allbrands = data
  }
}
