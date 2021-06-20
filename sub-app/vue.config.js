/*
 * @Author: 
 * @Date: 2021-06-19 21:49:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 23:54:53
 * @Description: 
 */
const isDev = process.env.NODE_ENV === 'development';
const appName = require('./package.json').name;
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: config => {
    config.output.library = `${appName}`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${appName}`;
  },
  chainWebpack: config => {
    if (!isDev) {
      const outputFilename = 'js/[name].[contenthash].js';
      config.output
        .filename(outputFilename)
        .chunkFilename(outputFilename)
        .end()

    }
  }
}