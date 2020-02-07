import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Assets from '@/views/Assets.vue'
import Clients from '@/views/Clients.vue'
import Metrics from '@/views/Metrics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register,
		meta: {
			requiresGuest: true
		}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
		meta: {
			requiresGuest: true
		}
	},
  {
    path: '/assets',
    name: 'assets',
    component: Assets,
		meta: {
			requiresAuth: true
		}
  },
  {
    path: '/clients',
    name: 'clients',
    component: Clients,
		meta: {
			requiresAuth: true
		}
  },
  {
    path: '/metrics',
    name: 'metrics',
    component: Metrics,
		meta: {
			requiresAuth: true
		}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!store.getters.isLoggedIn) {
			// Redirect to Login
			next('/login')
		} else {
			next()
		}
	} else if (to.matched.some(record => record.meta.requiresGuest)) {
		if (store.getters.isLoggedIn) {
			// Redirect to Login
			next('/assets')
		} else {
			next()
		}
	}
})

export default router
