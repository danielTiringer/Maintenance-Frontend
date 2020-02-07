import axios from 'axios'
import router from '@/router'

let url = 'http://localhost:5000/api/users'

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
	// Log User In
	async login({ commit }, user) {
		commit('auth_request')
		let response = await axios.post(`${url}/login`, user)
		if (response.data.success) {
			const token = response.data.token
			const user = response.data.user
			// Store Token in Local Storage
			localStorage.setItem('token', token)
			axios.defaults.headers.common['Authorization'] = token
			commit('auth_success', token, user)
		}
		return response
	},

	// Register User
	async register({ commit }, userData) {
		commit('register_request')
		let response = await axios.post(`${url}/register`, userData)
		if (response.data.success !== undefined) {
			commit('register_success')
		}
		return response
	},

	// Log User Out
	async logout({ commit }) {
		await localStorage.removeItem('token')
		commit('logout')
		delete axios.defaults.headers.common['Authorization']
		router.push('/login')
		return
	}

};

const mutations = {
	auth_request(state) {
		state.status = 'loading'
	},
	auth_success(state, token, user) {
		state.token = token
		state.user = user
		state.status = 'success'
	},
	register_request(state) {
		state.status = 'loading'
	},
	register_success(state) {
		state.status = 'success'
	},
	logout(state) {
		state.status = ''
		state.token = ''
		state.user = ''
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
