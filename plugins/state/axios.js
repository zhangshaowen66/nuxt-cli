import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // Form Data 模式
//定义fetch函数，config为配置
export function fetch(config,base){
  //返回promise对象
  return new Promise((resolve,reject) =>{
    //创建axios实例，把基本的配置放进去
    const instance = axios.create({
      //定义请求文件类型
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      // 请求超时
      timeout: 5000
    });
    //请求成功后执行的函数
    instance(config).then(res =>{
      console.log(res);
      resolve(res);
      if (res.data.Code === 101) {
        console.error('用户未登录');
      }
      //失败后执行的函数
    }).catch(err => {
      console.log('错误')
      console.log(err);
      reject(err);
    })
  });
}

// 封装调用的接口 getData
export function $axios(url,data, type = 'post', host) {
  let baseURL = process.env.baseUrl[host] || process.env.baseUrl['host']
  console.log( baseURL +url)
  //   // axios.defaults.headers.common['Authorization'] =  window.sessionStorage.getItem('sessionId') || this.$route.query.sessionId
  // 判断是否登录
   /*if (window.localStorage.getItem('token')) {
    data = _merge({
      /!*access_token: '3655b548-8d35-4cfe-92ac-9ce746f0b244'*!/
    }, data)
  } else {
    data = {}
  }*/
  if (type === 'post' && !data) {
    data = {}
  } else if (type === 'get' && !data) {
    data = ""
  }
  if (type === 'post') {
    // Form Data 模式时用qs序列化
    data = qs.stringify(data)
  }
  return fetch({
    url: type === 'post' ? baseURL + url : baseURL + url + data,
    method: type,
    data: data,
  })
}
