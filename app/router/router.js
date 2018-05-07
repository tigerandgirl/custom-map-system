import React from 'react';
import Bundle from '../projectTools/bundle';

export default [
  {
    path: '/',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Home')}/>;
    }
  },
  {
    path: '/login',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Login')}/>;
    }
  },
  {
    path: '/sub1/page1',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Page1')}/>;
    }
  },
  {
    path: '/page2',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Page2')} />;
    }
  },
  {
    path: '/comment',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/CommentPage')} />;
    }
  },
  {
    path: '/echart',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/EchartPage')} />;
    }
  },
  {
    path: '/sub1/test1',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Test1')} />;
    }
  },
  {
    path: '/sub1/test2',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Test2')} />;
    }
  },
  {
    path: '/error',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/ErrorPage')} />;
    }
  }
];
