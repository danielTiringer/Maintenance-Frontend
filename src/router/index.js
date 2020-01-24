import Vue from 'vue'
import VueRouter from 'vue-router'
import Assets from '../views/Assets.vue'
import Metrics from '../views/Metrics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'assets',
    component: Assets
  },
  {
    path: '/metrics',
    name: 'metrics',
    component: Metrics
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
