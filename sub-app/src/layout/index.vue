<!--
 * @Author: 
 * @Date: 2021-06-19 16:48:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 23:15:50
 * @Description: 
-->
<template>
  <div class="sub-one-layout">
    <div class="sidebar-one">
      <el-button type="primary" @click="toUrl('/monitor')">监控</el-button>
      <el-button type="primary" @click="toUrl('/project')">项目管理</el-button>
    </div>
    <app-main class="sub-one-main"></app-main>
  </div>
</template>
<script>
import { AppMain } from './components'
export default {
  name: 'subLayoutOne',
  components: {
    AppMain
  },
  data() {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    toUrl(url) {
      this.$router.push(url);
    }
  },
  computed: {
  }
} 
</script>

<style lang="scss" scoped>
  .sub-one-layout {
    display: flex;
    align-items: center;
    height: 100%;
    & > .sidebar-one {
      width: 250px;
      height: 100%;
      background: #eee;
    }
    & > .sub-one-main {
      width: calc(100% - 250px);
      height: 100%;
    }

  }
</style>


