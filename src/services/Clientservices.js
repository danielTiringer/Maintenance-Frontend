import axios from 'axios';

let url = 'api/clients/';

class ClientService {

	// Get Clients

	static getClients() {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await axios.get(url);
				resolve(response.data);
			} catch(error) {
				reject(error);
			}
		});
	}

	// Create Client

	static createClient(object) {
		return axios.post(url, object);
	}

	// Delete Client

	static deleteClient(id) {
		return axios.delete(`${url}${id}`);
	}

	// Update Client
	static updateClient(id, content) {
		return axios.put(`${url}${id}`, content);
	}

	// Create Contact
	static createContact(id, object) {
		return axios.post(`${url}${id}/contact`, object);
	}

	// Delete Contact
	static deleteContact(id, position) {
		return axios.delete(`${url}${id}/contact/${position}`);
	}

	// Update Contact
	static updateContact(id, position, content) {
		return axios.put(`${url}${id}/contact/${position}`, content);
	}

}

export default ClientService;
