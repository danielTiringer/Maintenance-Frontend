import ClientService from '@/services/Clientservices'

const state = {
	clients: []
};

const getters = {
	allClients: (state) => state.clients
};

const actions = {
	// Client actions

	async fetchClients({ commit }) {
		const response = await ClientService.getClients()
		commit('setClients', response)
	},
	async addClient({ commit }, client) {
		const response = await ClientService.createClient(client)
		commit('newClient', response)
	},
	async removeClient({ commit }, id) {
		await ClientService.deleteClient(id)
		commit('removeClient', id)
	},
	async updateClient({ commit }, updateId, updateContent) {
		const response = await ClientService.updateClient(updateId, updateContent)
		commit('updateClient', response.data)
	},

	// Contact actions

	async addContact({ commit }, id, contact) {
		const response = await ClientService.createContact(id, contact)
		commit('newContact', response)
	},
	async removeContact({ commit }, id, position) {
		await ClientService.deleteContact(id, position)
		commit('removeContact', id, position)
	},
	async modifyContact({ commit }, id, position, content) {
		const response = await ClientService.updateContact(id, position, content)
		commit('updateContact', response.data)
	}

};

const mutations = {
	// Client mutations

	setClients: (state, clients) => (state.clients = clients),
	newClient: (state, client) => state.clients.push(client),
	removeClient: (state, id) => state.clients = state.clients.filter(client => client._id !== id),
	updateClient: (state, updateId, updateContent) => {
		const index = state.clients.findIndex(client => client.id === updateId)
		if (index !== -1) {
			state.clients.splice(index, 1, updateContent)
		}
	}

	// Contact mutations

	// To be researched and added

};

export default {
	state,
	getters,
	actions,
	mutations
}
