import ajax from './ajax'
/*
  获取主页信息
 */
export const reqHome = () => ajax('/home')

/**
 * 获取获取列表信息
 */
export const reqItem = () => ajax('/list/item')
/**
 * 获取获取品牌信息Brand
 */
export const reqBrand = () => ajax('/list/brand')

/*
* 获取全部品牌
*
* */
export const reqAllBrand = () => ajax('/allbrands')

/*发送图片验证码*/
export const captchas = () => ajax('/captcha')
/*获取短信验证码*/
export const sendCode = phone => ajax('/sendcode',{phone})

/*手机号密码登录*/
export const phoneLogin = ({phone,pwd}) => ajax('/login_pwd',{phone,pwd},'POST')
/*手机动态密码登录*/
export const actphoneLogin = ({phone,code,captcha}) => ajax('/login_sms',{phone,code,captcha},'POST')

