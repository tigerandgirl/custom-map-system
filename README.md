# 环境配置
## 开发环境
> - NODE_ENV 为 development
> - 启用模块热更新（hot module replacement）
> - 额外的 webpack-dev-server 配置项，API Proxy 配置项
> - 输出 Sourcemap

## 生产环境
> - NODE_ENV 为 production
> - 将 React、jQuery 等常用库设置为 external，直接采用 CDN 线上的版本
> - 样式源文件（如 css、less、scss 等）需要通过 ExtractTextPlugin 独立抽取成 css 文件
> - 启用 post-css
> - 启用 optimize-minimize（如 uglify 等）
> - 绝对不能有 console.log() , 为 babel 配置 Remove console transform

## 运行命令
> - 开发: npm run dev
> - 测试环境打包: npm run build.test
> - 生产环境: npm run build
> - API接口测试: npm run api

## css编写
> - 使用了cssnext

## 功能模块列表
> - 引入antd的menu完成整体布局及交互 - 100%
> - 简单的评论模块（mobx记录数据） - 100%
> - 引入echarts并实现异步加载 - 100%
> - 封装项目用的树结构 - 0%
> - 封装项目用的评论模块（包括列表分页展示，星级评分，文本域等）- 0%
