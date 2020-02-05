import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Assets from '../views/Assets.vue'
import Clients from '../views/Clients.vue'
import Metrics from '../views/Metrics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
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
