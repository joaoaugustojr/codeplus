import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const headers = { 'content-type': 'application/x-www-form-urlencoded' };

const crud = {
	list: async function(url) {
		const response = await axios.get(url);
		return response.data;
	},

	add: async function(url, idForm) {
		var form = $('#' + idForm).serialize();
		const response = await axios.post(url, { form }, { headers: headers });
		return response.data;
	}
};

export default crud;
