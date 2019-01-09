import {lazy} from 'react';

import suspenseComponent from '../tools/suspenseComponent';

export default [
  {
    path: '/test',
    component: suspenseComponent(lazy(() => import('../components/test/Test.jsx'))),
  },
];