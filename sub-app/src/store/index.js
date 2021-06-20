/*
 * @Author: 
 * @Date: 2021-06-19 17:04:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 17:06:35
 * @Description: 
 */
import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

import app from './modules/app';
const store = new vuex.Store({
  modules: {
    app
  }
})

export default store;