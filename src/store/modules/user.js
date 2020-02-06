const axios = require('axios');

let url = 'api/users/';

const state = {
	token: localStorage.getItem('token') || '',
	user: {},
	status: ''
};

const getters = {
	isLoggedIn: state => !!state.token,
	authState: state => state.status,
	user: state => state.user
};

const actions = {
	// Login Action
	// eslint-disable-next-line no-unused-vars
	async login({ commit }, user) {
		commit('auth_request')
		let response = await axios.post(`${url}login`)
		if (response.data.success) {
			const token = response.data.token
			const user = response.data.user
			// Store Token in Local Storage
			localStorage.setItem('token', token)
			axios.defaults.headers.common['Authorization'] = token
			commit('auth_success', token, user)
		}
		return response
	}
};

const mutations = {
	auth_request (state) {
		state.status = 'loading'
	},
	auth_success(state, token, user) {
		state.token = token
		state.user = user
		state.status = 'success'
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
