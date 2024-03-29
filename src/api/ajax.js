/* 
ajax函数请求模块
返回值：promise对象
*/
import axios from 'axios'

export default function ajax(url, data = {}, method = "GET") {
    /* 
    console.log('test')
    const response = await ajax()
    const result = response.data
    const resule = await ajax()
    使其可以直接返回结果
    */
    return new Promise((resolve, reject) => {
        // 执行异步ajax请求
        let promise
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        promise.then(response=>{
            resolve(response.data);
        }).catch(error=>{
            reject(error);
        })
    })
}