/*
 * @Author: 
 * @Date: 2021-06-19 16:08:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-20 00:14:40
 * @Description: 
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
const appName = require('../../package.json').name;

Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// }

const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/monitor',
    children: [
      {
        path: '/monitor',
        component: () => import('@/views/monitor'),
        name: 'monitor',
        meta: {
          title: '监控'
        }
      },
      {
        path: '/project',
        component: () => import('@/views/project'),
        name: 'project',
        meta: {
          title: '项目管理'
        }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? `/${appName}` : '/',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes,
  mode: 'history'
})

const router = createRouter();
router.$addRoutes = (params) => {
  router.matcher = new VueRouter({ mode: 'history' }).matcher
  router.addRoutes(params)
}

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
export const routes = constantRoutes