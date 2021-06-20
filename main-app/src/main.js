/*
 * @Author: 
 * @Date: 2021-06-18 09:09:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 17:47:35
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import { start, addGlobalUncaughtErrorHandler } from 'qiankun';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'normalize.css/normalize.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.config.productionTip = false

const render = ({ subModuleContent }) => {
  if (!Vue.prototype.$daasapp) {
    Vue.prototype.$daasapp = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  } else {
    store.commit('setSubModuleContent', subModuleContent)
  }
}

render({});

// 启动qiankun
start({
  prefetch: true
})

addGlobalUncaughtErrorHandler(() => {
  NProgress.done();
  console.log('处理捕获异常')
})