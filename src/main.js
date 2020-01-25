import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
	store,
  router,
  vuetify,
	axios,
  render: h => h(App)
}).$mount('#app')
