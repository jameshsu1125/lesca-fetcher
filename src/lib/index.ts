export enum contentType {
  URL_ENCODED = 'application/x-www-form-urlencoded; charset=UTF-8',
  JSON = 'application/json;charset=utf-8',
}

export enum formatType {
  string = 0,
  JSON = 1,
}

type Headers = {
  'Content-Type': contentType;
  Authorization?: string;
};

type Config = {
  hostUrl: string;
  contentType: contentType;
  formatType: formatType;
};

const defaultConfig: Config = {
  hostUrl: 'https://jsonplaceholder.typicode.com/todos/1',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
};

let host: string;
let headers: Headers;
let format: formatType;

const install = (setting: Config) => {
  const set = { ...defaultConfig, ...setting };
  const { hostUrl, contentType, formatType } = set;

  host = hostUrl.slice(-1) === '/' ? hostUrl.slice(0, -1) : hostUrl;
  format = formatType;
  headers = {
    'Content-Type': contentType,
  };
};

const setJWT = (jwt: string) => {
  headers.Authorization = `Bearer ${jwt}`;
};

const post = (api: String = '/api', data: Object) => {
  const method = 'POST';
  const url = api.slice(0, 1) === '/' ? `${host}${api}` : `${host}/${api}`;

  let body: any = JSON.stringify(data);
  if (headers['Content-Type'] === contentType.URL_ENCODED) {
    body = Object.entries(data)
      .map((e) => `${e[0]}=${e[1]}`)
      .join('&');
  }

  return new Promise((resovle, rejack) => {
    fetch(url, { method, body, headers })
      .then((res) => {
        if (format === formatType.JSON) {
          res
            .json()
            .then((e) => resovle(e))
            .catch((e) => rejack(e));
        } else {
          res
            .text()
            .then((e) => resovle(e))
            .catch((e) => rejack(e));
        }
      })
      .catch((e) => rejack(e));
  });
};

const get = (api: String = '/api') => {
  const method = 'GET';
  const url = api.slice(0, 1) === '/' ? `${host}${api}` : `${host}/${api}`;

  return new Promise((resovle, rejack) => {
    fetch(url, { method, headers })
      .then((res) => {
        if (format === formatType.JSON) {
          res
            .json()
            .then((e) => resovle(e))
            .catch((e) => rejack(e));
        } else {
          res
            .text()
            .then((e) => resovle(e))
            .catch((e) => rejack(e));
        }
      })
      .catch((e) => rejack(e));
  });
};

const Fetcher = {
  install,
  post,
  get,
  setJWT,
};

export default Fetcher;
