import http from '@/tools/http.js';

export const testAPI = () => {
  return http({
    url: '/test',
    method: 'post',
    data: {
      name: 'admin',
      password: '123456',
    }
  });
};