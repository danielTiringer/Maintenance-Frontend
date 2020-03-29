import axios from 'axios';

let url = 'api/assets/';

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
		return new Promise(async (resolve, reject) => {
			try {
				const response = await axios.post(url, object);
				resolve(response.data);
			} catch(error) {
				reject(error);
			}
		});
	}

	// Delete Asset
	static deleteAsset(id) {
		return axios.delete(`${url}${id}`);
	}

	// Update Asset
	static updateAsset(object) {
		return axios.put(`${url}${object._id}`, object);
	}

	// Complete Asset
	static modifyAsset(id) {
		return axios.put(`${url}${id}/complete`);
	}
}

export default AssetService;
