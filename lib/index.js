"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergePath = exports.formatType = exports.contentType = void 0;
var contentType;
(function (contentType) {
    contentType["URL_ENCODED"] = "application/x-www-form-urlencoded; charset=UTF-8";
    contentType["JSON"] = "application/json;charset=utf-8";
})(contentType || (exports.contentType = contentType = {}));
var formatType;
(function (formatType) {
    formatType[formatType["string"] = 0] = "string";
    formatType[formatType["JSON"] = 1] = "JSON";
})(formatType || (exports.formatType = formatType = {}));
const defaultConfig = {
    hostUrl: 'https://jsonplaceholder.typicode.com/todos/1',
    contentType: contentType.JSON,
    formatType: formatType.JSON,
};
let host;
let headers;
let format;
const install = (setting) => {
    const set = Object.assign(Object.assign({}, defaultConfig), setting);
    const { hostUrl, contentType, formatType } = set;
    host = hostUrl.slice(-1) === '/' ? hostUrl.slice(0, -1) : hostUrl;
    format = formatType;
    headers = {
        'Content-Type': contentType,
    };
};
const setJWT = (jwt) => {
    headers.Authorization = `Bearer ${jwt}`;
};
const setHeader = (property) => {
    headers = Object.assign(Object.assign({}, headers), property);
};
const mergePath = (api = '/api') => {
    return api.slice(0, 1) === '/' ? `${host}${api}` : `${host}/${api}`;
};
exports.mergePath = mergePath;
const post = (api = '/api', data) => {
    const method = 'POST';
    let body = JSON.stringify(data);
    if (headers['Content-Type'] === contentType.URL_ENCODED) {
        body = Object.entries(data)
            .map((e) => `${e[0]}=${e[1]}`)
            .join('&');
    }
    if (format === formatType.JSON) {
        return new Promise((resolve, reject) => {
            fetch((0, exports.mergePath)(api), { method, body, headers })
                .then((res) => {
                res
                    .json()
                    .then((e) => resolve(e))
                    .catch((e) => reject(e));
            })
                .catch((e) => reject(e));
        });
    }
    else {
        return new Promise((resolve, reject) => {
            fetch((0, exports.mergePath)(api), { method, body, headers })
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
const get = (api = '/api') => {
    const method = 'GET';
    if (format === formatType.JSON) {
        return new Promise((resolve, reject) => {
            fetch((0, exports.mergePath)(api), { method, headers })
                .then((res) => {
                res
                    .json()
                    .then((e) => resolve(e))
                    .catch((e) => reject(e));
            })
                .catch((e) => reject(e));
        });
    }
    else {
        return new Promise((resolve, reject) => {
            fetch((0, exports.mergePath)(api), { method, headers })
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
exports.default = Fetcher;
