import axios from 'axios';

let url = `http://localhost:5000/api/assets/`;

class AssetService {
	// Get Assets

	static getAssets() {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await axios.get(url);
				resolve(response.data);
			} catch(error) {
				reject(error);
			}
		});
	}

	// Create Asset

	static createAsset(object) {
		return axios.post(url, object);
	}

	// Delete Asset

	static deleteAsset(id) {
		return axios.delete(`${url}${id}`);
	}

	// Update Asset
	static updateAsset(id, content) {
		return axios.put(`${url}${id}`, content);
	}

	// Complete Asset
	static modifyAsset(id) {
		return axios.put(`${url}${id}/complete`);
	}
}

export default AssetService;
