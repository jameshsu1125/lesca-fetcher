[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

Integrate fetch for easier use.

# Installation

```sh
npm install lesca-fetcher --save
```

## Usage

```JSX
import Fetcher, { contentType, formatType } from 'lesca-fetcher';

Fetcher.install({
  hostUrl: 'https://yourhost.com/api/',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
});

Fetcher.setJWT('Fsr.956b6.67ktJGr'); // if necessary
Fetcher.setHeader({ mode:'cores' }) // if necessary


<button
  onClick={() => {
    const path = '/save';
    const data = { name: 'myName', age: '18' };
    Fetcher.post(path, data).then((respond) => {
      console.log(respond);
    });
  }}
>post</div>;

<button
  onClick={() => {
    const path = '/get';
    Fetcher.get(path).then((respond) => {
      console.log(respond);
    });
  }}
>get</div>;
```

## Development

### Methods

| method                                                           |    description     | default |
| :--------------------------------------------------------------- | :----------------: | ------: |
| .**install**(**[config](#config)**:_object_)                     |   install first    |         |
| .**post**(**api**:_string_, **data**:_object_)                   |        POST        |         |
| .**get**(**api**:_string_)                                       |        GET         |         |
| .**setJWT**(**token**):_string_                                  |   set JWT Token    |         |
| .**postStringify**(**api**:_string_, **data**:_object_):_string_ | post and stringify |         |
| .**mergePath**(**api**:_string_):_string_                        |   get full path    |         |

#### config

```js
const config = {
  hostUrl: 'https://www.yourHost.com/api/', // string
  contentType: contentType.JSON, // enum contentType.JSON || contentType.URL_ENCODED
  formatType: formatType.JSON, // enum formatType.JSON || formatType.string
};
```

### Features

- maintain if necessary
