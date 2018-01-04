/**
 * Created by tengteng on 17/12/27.
 */

import axios from 'axios';
import Qs from 'qs';
import baseUrl from '../config';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 预处理请求信息（config 发出的数据） 下方是三种请求，李迪凡的
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    // POST传参序列化
    config.data = Qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 预处理请求错误（error）
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 预处理响应数据（response）如果数据当中有不要的部分，就截留
  console.log(response);
  return response;
}, function (error) {
  // 预处理响应错误（error）
  return Promise.reject(error);
});

/**
 * 返回axios方法
 * @param url（如果传绝对地址则baseURL不会追加到url之前）
 * @param method
 * @param timeout
 * @param data
 * @param headers
 * @param dataType
 * @returns {AxiosPromise}
 */
export default function(url, {
  // 不传时，默认参数
  method = 'post',
  timeout = 10000,
  data = {},
  headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'}, // 可以扩展，扩展规则参考http://tool.oschina.net/commons/
  dataType = 'json' // 若是上传其他类型的数据，需要进行重定义，如图片与文件上传
}) {
  const config = {
    method: method,
    timeout: timeout,
    url: url, // 如果URL是完整的，包含域名，则下方的域名不会被拼接
    baseURL: baseUrl.URL_CNODEJS, // 域名，在最外层的config.js当中可以修改，请求目标服务器域名配置，结合我们自己的项目，在项目放置到服务器上时，就是将域名替换成192.168.1.3
    data: data,
    headers: headers,
    dataType: dataType
  };
  return axios(config);
}
