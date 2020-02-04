import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import assets from './modules/assets';
import clients from './modules/clients';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
	modules: {
		user,
		assets,
		clients,
	}
})

