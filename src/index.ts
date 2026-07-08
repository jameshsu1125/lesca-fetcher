export enum contentType {
  URL_ENCODED = 'application/x-www-form-urlencoded; charset=UTF-8',
  JSON = 'application/json;charset=utf-8',
}

export enum formatType {
  string = 0,
  JSON = 1,
}

export type Config = {
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

const options: Record<string, string | number | boolean | object> = {};

const install = (setting: Config) => {
  const set = { ...defaultConfig, ...setting };
  const { hostUrl, contentType, formatType } = set;

  host = hostUrl.slice(-1) === '/' ? hostUrl.slice(0, -1) : hostUrl;
  format = formatType;
  headers = new Headers({
    'Content-Type': contentType,
  });
};

const setJWT = (jwt: string) => {
  headers.set('Authorization', `Bearer ${jwt}`);
};

const setHeader = (property: { [k: string]: string }) => {
  Object.entries(property).forEach(([key, value]) => {
    headers.set(key, value);
  });
};

const setOptions = (property: Record<string, string | number | boolean | object>) => {
  Object.entries(property).forEach(([key, value]) => {
    options[key] = value;
  });
};

export const mergePath = (api: string = '/api', hostOverride?: string) => {
  const currentHost = hostOverride ? hostOverride : host;
  const currentApiWithSlash = api.slice(0, 1) === '/' ? api : `/${api}`;
  const currentHostWithoutSlash =
    currentHost.slice(-1) === '/' ? currentHost.slice(0, -1) : currentHost;

  return `${currentHostWithoutSlash}${currentApiWithSlash}`;
};

const post = <T>(api: string = '/api', data: object) => {
  const method = 'POST';
  let body: string = JSON.stringify(data);
  if (headers.get('Content-Type') === contentType.URL_ENCODED) {
    body = Object.entries(data)
      .map((e) => `${e[0]}=${e[1]}`)
      .join('&');
  }

  if (format === formatType.JSON) {
    return new Promise<T>((resolve, reject) => {
      fetch(mergePath(api), { ...options, method, body, headers })
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
      fetch(mergePath(api), { ...options, method, body, headers })
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

const get = <T>(api: string = '/api') => {
  const method = 'GET';
  if (format === formatType.JSON) {
    return new Promise<T>((resolve, reject) => {
      console.log({ ...options, method, headers });

      fetch(mergePath(api), { ...options, method, headers })
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
      fetch(mergePath(api), { ...options, method, headers })
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
  setOptions,
};

export default Fetcher;
