<!--
 * @Author: 
 * @Date: 2021-06-18 09:09:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 22:08:09
 * @Description: 
-->
<template>
  <div id="app" class="sub-app-one">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'subAppVueOne'
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
.sub-app-one {
  width: 100%;
  height: 100%;
}
</style>
