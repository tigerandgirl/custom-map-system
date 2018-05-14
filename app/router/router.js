import React from 'react';
import Bundle from '../projectTools/bundle';

export default [
  //首页
  {
    path: '/',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Home')}/>;
    }
  },
  //登录页
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
    path: '/sub1/tree',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Tree')} />;
    }
  },
  {
    path: '/sub1/test2',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Test2')} />;
    }
  },
  //用户群画像页面
  {
    path: '/customGroup',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/CustomGroup')} />;
    }
  },
  //客户轮廓页面
  {
    path: '/custom',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/Custom')} />;
    }
  },
  //标签详情页面
  {
    path: '/tagDetail',
    exact: false,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/TagDetail')} />;
    }
    // ,
    // childRoutes: [
    //   { 
    //     path: '/tagDetailAll', 
    //     component(props) {
    //       return <Bundle {...props} load={() => import('../pages/TagDetailAll')} />;
    //     }
    //   },
    //   { 
    //     path: '/tagDetailCon', 
    //     component(props) {
    //       return <Bundle {...props} load={() => import('../pages/TagDetailCon')} />;
    //     }
    //   }
    // ]
  },
  // {
  //   path: '/tagDetail/tagDetailAll',
  //   exact: true,
  //   component(props) {
  //     return <Bundle {...props} load={() => import('../pages/TagDetailAll')} />;
  //   }
  // },
  // {
  //   path: '/tagDetail/tagDetailCon',
  //   exact: true,
  //   component(props) {
  //     return <Bundle {...props} load={() => import('../pages/TagDetailCon')} />;
  //   }
  // },
  //错误页
  {
    path: '/error',
    exact: true,
    component(props) {
      return <Bundle {...props} load={() => import('../pages/ErrorPage')} />;
    }
  }
];
