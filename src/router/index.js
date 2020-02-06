import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Assets from '../views/Assets.vue'
import Clients from '../views/Clients.vue'
import Metrics from '../views/Metrics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
	},
  {
    path: '/assets',
    name: 'assets',
    component: Assets
  },
  {
    path: '/clients',
    name: 'clients',
    component: Clients
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
