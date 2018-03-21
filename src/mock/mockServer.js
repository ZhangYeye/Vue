import Mock from 'mockjs'
import data from './data.json'

// 向外提供goods数据
Mock.mock('/home',{code:0,data:data.homepage})
// 向外提供ratings数据
Mock.mock('/list',{code:0,data:data.categorys})

