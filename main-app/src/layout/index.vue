<!--
 * @Author: 
 * @Date: 2021-06-19 16:48:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-20 00:10:16
 * @Description: 
-->
<template>
  <div>
    <nav-bar></nav-bar>
    <div v-if="!showSubModule" class="main-body">
      <router-view></router-view>
    </div>
    <div v-show="showSubModule" class="main-body">
      <div id="sub-module" v-html="subModuleContent" style="width: 100%;height: 100%;"></div>
    </div>
  </div>
</template>
<script>
import { NavBar } from './components'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    NavBar
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      showSubModule: state => state.app.showSubModule,
      subModuleContent: state => state.app.subModuleContent
    })
  }
}
</script>

<style lang="scss" scoped>
  .main-body {
    height: calc(100% - 50px);
  }
  #sub-module, #sub-module > div {
    width: 100%;
    height: 100%;
  }
</style>


