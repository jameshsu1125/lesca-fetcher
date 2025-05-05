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

const setHeader = (property: { [k: string]: string }) => {
  headers = {
    ...headers,
    ...property,
  };
};

export const mergePath = (api: String = '/api') => {
  return api.slice(0, 1) === '/' ? `${host}${api}` : `${host}/${api}`;
};

const post = <T>(api: String = '/api', data: Object) => {
  const method = 'POST';
  let body: any = JSON.stringify(data);
  if (headers['Content-Type'] === contentType.URL_ENCODED) {
    body = Object.entries(data)
      .map((e) => `${e[0]}=${e[1]}`)
      .join('&');
  }

  if (format === formatType.JSON) {
    return new Promise<T>((resolve, reject) => {
      fetch(mergePath(api), { method, body, headers })
        .then((res) => {
          res
            .json()
            .then((e) => resolve(e))
            .catch((e) => reject(e));
        })
        .catch((e) => reject(e));
    });
  } else {
    return new Promise<string>((resolve, reject) => {
      fetch(mergePath(api), { method, body, headers })
        .then((res) => {
          res
            .text()
            .then((e) => resolve(e))
            .catch((e) => reject(e));
        })
        .catch((e) => reject(e));
    });
  }
};

const get = <T>(api: String = '/api') => {
  const method = 'GET';
  if (format === formatType.JSON) {
    return new Promise<T>((resolve, reject) => {
      fetch(mergePath(api), { method, headers })
        .then((res) => {
          res
            .json()
            .then((e) => resolve(e))
            .catch((e) => reject(e));
        })
        .catch((e) => reject(e));
    });
  } else {
    return new Promise<string>((resolve, reject) => {
      fetch(mergePath(api), { method, headers })
        .then((res) => {
          res
            .text()
            .then((e) => resolve(e))
            .catch((e) => reject(e));
        })
        .catch((e) => reject(e));
    });
  }
};

const Fetcher = {
  install,
  post,
  get,
  setJWT,
  setHeader,
};

export default Fetcher;
