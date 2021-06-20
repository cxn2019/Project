<!--
 * @Author: 
 * @Date: 2021-06-19 22:31:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 22:32:55
 * @Description: 
-->
<template>
  <section>
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default { 
  name: 'subAppOneAppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

