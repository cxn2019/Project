/*
 * @Author: 
 * @Date: 2021-06-19 17:06:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-19 17:21:59
 * @Description: 
 */
export default {
  state: {
    showSubModule: false,
    subModuleContent: ''
  },
  mutations: {
    setShowSubModule(state, bool) {
      state.showSubModule = bool;
    },
    setSubModuleContent(state, html) {
      state.subModuleContent = html;
    }
  }
}