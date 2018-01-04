/**
 * Created by tengteng on 17/12/27.
 */

import axios from './axios';

/**
 * 统一处理所有接口请求
 * 参数对象将会替换axios中默认参数中的键值对，其中可包含：
 * method
 * timeout
 * data
 * headers
 * dataType
 */
const server = {
  getTopics(data) {
    // 调用请求方式 只是替换了method内部参数
    return axios('api/v1/topics', {
      method: 'post',
      data: data // 穿入对象
    });
  },
  getTopicDetail() {
    return axios('api/v1/topic/5433d5e4e737cbe96dcef312', {
      method: 'get'
    });
  }
};

export default server;
