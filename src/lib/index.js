const defaultKeyForAPI = '_lesca_baseFetchURL';

const install = (baseURL = '') => {
	const last = baseURL.slice(-1);

	let url = '';
	if (last === '/') url = baseURL.slice(0, -1);
	else url = baseURL;

	window[defaultKeyForAPI] = url;
};

const post = (api = '/api', data = { name: 'name', age: '18' }) => {
	const baseURL = window[defaultKeyForAPI];
	const method = 'POST';
	const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };

	const first = api.slice(0, 1);

	let url = '';
	if (first !== '/') url = `${baseURL}/${api}`;
	else url = `${baseURL}${api}`;

	const body = Object.entries(data)
		.map((e) => {
			const [key, value] = e;
			return `${key}=${value}`;
		})
		.join('&');

	return new Promise((res, rej) => {
		fetch(url, { method, body, headers })
			.then((res) => res.json())
			.then((e) => res(e))
			.catch((e) => rej(e));
	});
};

const get = (api = '/api', data = { name: 'name', age: '18' }) => {
	const baseURL = window[defaultKeyForAPI];
	const method = 'GET';
	const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };

	const first = api.slice(0, 1);

	let url = '';
	if (first !== '/') url = `${baseURL}/${api}`;
	else url = `${baseURL}${api}`;

	const body = Object.entries(data)
		.map((e) => {
			const [key, value] = e;
			return `${key}=${value}`;
		})
		.join('&');

	return new Promise((res, rej) => {
		fetch(url, { method, body, headers })
			.then((res) => res.json())
			.then((e) => res(e))
			.catch((e) => rej(e));
	});
};

module.exports = {
	install,
	post,
	get,
};
