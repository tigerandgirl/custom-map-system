const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader:'css-loader',options:{minimize: false, importLoaders:1}},
          {loader: 'postcss-loader',options:{config: {path: path.resolve(__dirname, '../postcss.config.js')} }}
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: /node_modules/,
        use:[{
          loader: 'file-loader',
          options:{
            name:'images/[name].[hash:5].[ext]'
          }
        }]
      },
      {
        test: /\.(htm|html)$/,
        use: ['html-withimg-loader']
      }
    ]
  },
  plugins: [
    //自动打开浏览器
    new OpenBrowserPlugin({
      url: `http://localhost:3002`,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../app/index.html'),
    })
  ],
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/'),
    port: '3002',
    watchContentBase: true,
    historyApiFallback: true,
    compress: true,
    hot: true,
    //编译错误时，显示在网页上
    overlay: {
      errors: true
    }
  }
};

module.exports = merge(config, devConfig);