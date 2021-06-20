<!--
 * @Author: 
 * @Date: 2021-06-19 16:55:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-20 22:30:24
 * @Description: 
-->
<template>
  <div class="main-nav-bar">
    <el-button type="primary" @click="toUrl('/account')">主应用路由（用户账号）</el-button>
    <el-button type="primary" @click="toUrl('/agency')">主应用路由（组织机构）</el-button>
    <el-button type="primary" @click="loadSubModule">模拟动态N次加载子应用列表</el-button>
    <el-button
      type="primary"
      v-for="(subapp, index) in apps"
      :key="index"
      @click="toSubModule(subapp.name)"
    >
      {{ subapp.name }}
    </el-button>
  </div>
</template>
<script>
import store from '@/store';
import { registerMicroApps } from 'qiankun';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
export default {
  name: 'NavBar',
  data() {
    return {
      apps: [
        {
          name: 'chadoopMicro',
          entry: '//localhost:8081/',
          container: '#sub-module',
          activeRule: this.getActiveRule('/chadoopMicro'),
          props: {}
        }
      ]
    }
  },
  mounted() {
    this.loadSubModule(); // 挂载后手动加载一次子应用
  },
  methods: {
    routerGo(href = '/', title = null, stateObj = {}) {
      window.history.pushState(stateObj, title, href)
    },
    toUrl(url) {
      this.$router.push(url);
      store.commit('setShowSubModule', false)
    },
    toSubModule(appname) {
      store.commit('setShowSubModule', true)
      this.routerGo(`/${appname}/`);
    },
    getActiveRule(routerPrefix) {
      return location => location.pathname.startsWith(routerPrefix);
    },
    loadSubModule() {
      registerMicroApps(this.apps, {
        beforeLoad: [
          app => {
            console.log(app.name)
            NProgress.start();
            return Promise.resolve();
          }
        ],
        beforeMount: [
          app => {
            console.log(app.name);
          }
        ],
        beforeUnmount: [
          app => {
            console.log(app.name)
            NProgress && NProgress.done();
          }
        ],
        afterMount: [
          app => {
            console.log(app.name)
            NProgress && NProgress.done();
            return Promise.resolve();
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-nav-bar {
    height: 50px;
    line-height: 50px;
    background: #eee;
  }
</style>

