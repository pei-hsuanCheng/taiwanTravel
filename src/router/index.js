import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foodhotel',
    name: 'foodhotel',
    component: () =>
      import('../views/foodhotel/index.vue')
  },
  {
    path: '/logistic',
    name: 'logistic',
    component: () =>
      import('../views/logistic/index.vue')
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
