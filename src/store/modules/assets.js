import AssetService from '@/services/Assetservices'

const state = {
	assets: []
};

const getters = {
	allAssets: (state) => state.assets
};

const actions = {
	async fetchAssets({ commit }) {
		const response = await AssetService.getAssets()
		commit('setAssets', response)
	},
	async addAsset({ commit }, asset) {
		const response = await AssetService.createAsset(asset)
		commit('newAsset', response)
	},
	async removeAsset({ commit }, id) {
		await AssetService.deleteAsset(id)
		commit('removeAsset', id)
	}
};

const mutations = {
	setAssets: (state, assets) => (state.assets = assets),
	newAsset: (state, asset) => state.assets.push(asset),
	removeAsset: (state, id) => state.assets = state.assets.filter(asset => asset._id !== id)
};

export default {
	state,
	getters,
	actions,
	mutations
}
