import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { isLogined } from '../utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      needLogin: true
    },
    component: () => import('../views/user.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    //  meta是元属性，可以存储一些自定义的属性
    meta: {
      needLogin: true
    },
    component: () => import('../views/cart.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      isHideFooter: true
    },
    component: () => import('../views/login.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    meta: {
      isHideFooter: true
    },
    component: () => import('../views/reg.vue')
  },
  {
    path: '/fire',
    name: 'fire',
    component: () => import('../views/fire.vue')
  }
]

const router = new VueRouter({
  routes
})
//  before  是在所有的路由跳转之前执行
//  to  是到哪去
//  from  表示从哪里来
router.beforeEach((to, from, next) => {
  // console.group('before')
  // console.log(to)
  // console.log(from)
  // console.log(next)
  // next() //  表示继续执行，如果在beforeEach中不调用next就是不执行了
  if (to.meta.needLogin) {
    if (isLogined) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})
//  afterEach表示路由跳转之后执行
router.afterEach((to, from) => {
  // console.group('after')
  // console.log(to)
  // console.log(from)
  // console.groupEnd()
})
export default router
