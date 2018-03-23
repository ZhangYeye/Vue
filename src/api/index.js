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
/*发送动态验证码*/
export const reqCaptchas = () => ajax('/captcha')
/*获取图片验证码*/
export const sendCode = phone => ajax('/sendcode',{phone})
/*手机号登录*/
export const phoneLogin = ({phone,pwd}) => ajax('/phone_login',{phone,pwd},'POST')

/*动态密码登录*/
export const actphoneLogin = ({phone,code,actpwd}) => ajax('/actphone_login',{phone},'POST')





/*
*
 * 账号密码登录
export const pwdLogin = ({name,pwd,captcha}) => ajax('/api/login_pwd',{
  name,
  pwd,
  captcha
},'POST')

/!**
 * 发送短信验证码
 *!/
export const sendCode = phone => ajax('/api/sendcode',{phone})

/!**
 * 手机号验证码登录
 *!/
export const smsLogin =({phone,code}) => ajax('/api/login_sms',{phone,code},'POST')

/!**
 * 获取用户信息(根据会话)
 *!/

export const reqUser = () => ajax('/api/userinfo')*/
