/*
 * @Author: 
 * @Date: 2021-06-18 16:35:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 16:06:17
 * @Description: 
 */
const et = require('element-theme');
et.init('./src/element/element-variables.scss');
et.run({
  config: './src/element/element-variables.scss',
  out: './src/theme',
  minimize: true
})