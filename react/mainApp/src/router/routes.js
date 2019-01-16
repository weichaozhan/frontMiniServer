/**
 * 入口路由数组
 */
import {lazy} from 'react';

import suspenseComponent from '@/tools/suspenseComponent';

const Login=lazy(() => import('../pages/login/index.jsx'));
const Main=lazy(() => import('../pages/main/index.jsx'));

export default [
  {
    path: '/Login',
    component: suspenseComponent(Login),
  },
  {
    path: '/',
    component: suspenseComponent(Main),
  },
];