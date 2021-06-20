<!--
 * @Author: 
 * @Date: 2021-06-18 09:09:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 17:43:45
 * @Description: 
-->
<template>
  <div id="app" class="main-app">
    <router-view v-if="!showSubModule"></router-view>
    <layout v-if="showSubModules"></layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppVue',
  components: {
    Layout: () => import('@/layout')
  },
  computed: {
    ...mapState({
      showSubModule: state => state.app.showSubModule,
      showSubModules() {
        if (['account', 'agency'].includes(this.$route.name)) {
          if (this.showSubModule) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      }
    })
  }
}
</script>

<style lang="scss">
@import './styles/app.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-app, .main-app > div {
  width: 100%;
  height: 100%;
}
</style>
