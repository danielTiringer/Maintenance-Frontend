import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import store from '@/store'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

// Set up Vue's default HTTP modules for API calls
Vue.prototype.$http = axios;
// Load the Token from Local Storage
const token = localStorage.getItem('token');
// If token exists, append it to axios header by default
if (token) {
	Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
	store,
  router,
  vuetify,
	axios,
  render: h => h(App)
}).$mount('#app')
