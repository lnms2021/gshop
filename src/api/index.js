/* 
包含n个接口请求函数的模块
函数返回值：promise对象
*/
import ajax from "./ajax";

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress=(geohash)=>ajax(`/position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodsTypes=()=>ajax('/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops=(latitude,longtitude)=>ajax('/shops',{latitude,longtitude})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShop=(geohash,keyword)=>ajax('/search_shops',{keyword,geohash})
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCode=()=>ajax('/captcha');
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPwdLogin=({name,pwd,captcha})=>ajax('/captcha',{name,pwd,captcha},"POST")
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode=(phone)=>ajax('/sendcode',{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqLoginSms=({phone,code})=>ajax('/login_sms',{phone,code},'POST')
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserinfo=()=>ajax('/userinfo')
// [10、用户登出](#10用户登出)<br/>
export const reqLogout=()=>ajax('/logout')