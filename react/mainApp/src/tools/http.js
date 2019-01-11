/**
 * axios 请求封装
 * @param {Object} config axios 配置
 * @param {Boolean} isFormData 是否为FormData，true 不设置请求头
 */
import React from 'react';
import { message } from 'antd';
import { history } from '@/index.js';

import axios from 'axios';
import Qs from 'qs';

let baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://operation.api.819.kc/';
} else {
  baseUrl = 'http://localhost:9091';
}

const http = (config = {}) => {
  const isFormData = Object.prototype.toString.call(config.data) === '[object FormData]';
  let headers = {};

  headers['Authorization'] = `${localStorage.getItem('token')}`;
  if (
    !(config.headers && config.headers['Content-Type']) 
    && !isFormData
  ) {
    headers['Content-Type'] = 'application/json';
  }
  headers = {...headers, ...config.headers};

  let data = null;

  // Content-Type 为 application/x-www-form-urlencoded 并且 data 类型不为 formData 时序列化 data
  if (!isFormData) {
    data = (!headers['Content-Type'] || headers['Content-Type'].indexOf('application/x-www-form-urlencoded') > -1) ? Qs.stringify(config.data) : (config.data || '');
  } else {
    data = config.data;
  }

  const newRequest = new Promise((resolve, reject) => {
    axios(Object.assign({}, config, {
      baseURL: config.baseUrl || baseUrl,
      url: config.url,
      method: config.method || 'get',
      headers: headers,
      data: data,
      params: config.params || '',
      timeout: config.timeout || 0,
    }))
      .then((response) => {
        if (response.data.code === 1002) {
          localStorage.removeItem('token');
          message.error('登录信息过期！请重新登录');

          reject('登录信息过期！请重新登录');
          history.push('/login');
        } else {
          resolve(response);
        }
      })
      .catch((error) => {
        message.error(error);
        reject(error);
      });
  });

  return newRequest;
};

export default http;
