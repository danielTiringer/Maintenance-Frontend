const state = {
	user: null
};

const getters = {
	user (state) {
		return state.user
	}
};

const actions = {
	async signUserUp({ commit }, payload) {
		// eslint-disable-next-line no-console
		console.log(commit, payload)
	},
};

const mutations = {
};

export default {
	state,
	getters,
	actions,
	mutations
}
