/*
 * @Author: 
 * @Date: 2021-06-18 09:09:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 23:27:11
 * @Description: 
 */
import Vue from 'vue'
import '../public-path';
import App from './App.vue'
import router from './router';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.config.productionTip = false

let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  console.log(props, 'bootstrap');
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance && instance.$destroy();
  instance = null;
}