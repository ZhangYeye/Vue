import ajax from './ajax'

/**
 * 获取地址信息(根据经纬度串)
 */
export const reqAddress = (geohash) => ajax('/api/position/' + geohash)

/**
 * 获取msite页面食品分类列表
 */
export const reqCategorys = () => ajax('/api/index_category')

/**
 * 获取msite商铺列表(根据经纬度)
 */
export const reqShops = ({latitude,longitude}) => ajax('/api/shops',{latitude,longitude})

/**
 * 账号密码登录
 */
export const pwdLogin = ({name,pwd,captcha}) => ajax('/api/login_pwd',{
  name,
  pwd,
  captcha
},'POST')

/**
 * 发送短信验证码
 */
export const sendCode = phone => ajax('/api/sendcode',{phone})

/**
 * 手机号验证码登录
 */
export const smsLogin =({phone,code}) => ajax('/api/login_sms',{phone,code},'POST')

/**
 * 获取用户信息(根据会话)
 */

export const reqUser = () => ajax('/api/userinfo')
