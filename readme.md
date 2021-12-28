[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
npm install lesca-sp88-fetch --save
```

# Usage

```javascript
import Fetcher from 'lesca-sp88-fetch';

Fetcher.install('https://yourhost.com/api');

<button
	onClick={() => {
		const api = '/save';
		const data = { name: 'myName', age: '18' };
		Fetcher.post(api, data).then((e) => {
			console.log(e); // log result
		});
	}}
/>;
```

# Methods

| method            |          options          |  description  | default |
| :---------------- | :-----------------------: | :-----------: | ------: |
| install(host-url) |         host-url          | install first |         |
| post(api', data)  | api(string), data(object) |   post data   |         |
