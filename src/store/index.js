import Vuex from 'vuex';
import Vue from 'vue';
import assets from './modules/assets';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
	modules: {
		assets
	}
})

