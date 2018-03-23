import Mock from 'mockjs'
import data from './data.json'

// 向外提供主页数据
Mock.mock('/home',{code:0,data:data.homepage})
// 向外提供列表数据
Mock.mock('/list/item',{code:0,data:data.categorys})
Mock.mock('/list/brand',{code:0,data:data.brand})
Mock.mock('/allbrands',{code:0,data:data.allbrands})

