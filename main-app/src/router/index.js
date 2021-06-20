/*
 * @Author: 
 * @Date: 2021-06-19 16:08:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-20 10:36:46
 * @Description: 
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/account',
    children: [
      {
        path: '/account',
        component: () => import('@/views/account'),
        name: 'account',
        meta: {
          title: '用户账号'
        }
      },
      {
        path: '/agency',
        component: () => import('@/views/agency'),
        name: 'agency',
        meta: {
          title: '组织机构'
        }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
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


router.beforeEach((to, from, next) => {
  if (to.name) {
    store.commit('setShowSubModule', false)
    next();
  } else {
    store.commit('setShowSubModule', true);
    next();
  }
})