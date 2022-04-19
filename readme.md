[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

## a Module for developer.

# Installation

```sh
install lesca-sp88-fetch --save
```

## Usage

```JSX
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

## Development

### Methods

| method                                         |  description  | default |
| :--------------------------------------------- | :-----------: | ------: |
| .**install**(**host**:_string_)                | install first |         |
| .**post**(**api**:_string_, **data**:_object_) |   post data   |         |

### Features

- TypeScript
- maintain if necessary
