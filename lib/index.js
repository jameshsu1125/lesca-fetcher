define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.contentType = void 0;
    var contentType;
    (function (contentType) {
        contentType["URL_ENCODED"] = "application/x-www-form-urlencoded; charset=UTF-8";
        contentType["JSON"] = "application/json;charset=utf-8";
    })(contentType = exports.contentType || (exports.contentType = {}));
    const defaultConfig = {
        hostUrl: 'https://jsonplaceholder.typicode.com/todos/1',
        contentType: contentType.URL_ENCODED,
    };
    let host;
    let headers;
    const install = (setting) => {
        const set = Object.assign(Object.assign({}, defaultConfig), setting);
        const { hostUrl, contentType } = set;
        host = hostUrl.slice(-1) === '/' ? hostUrl.slice(0, -1) : hostUrl;
        headers = {
            'Content-Type': contentType,
        };
    };
    const setJWT = (jwt) => {
        headers.Authorization = `Bearer ${jwt}`;
    };
    const post = (api = '/api', data) => {
        const method = 'POST';
        const url = api.slice(0, 1) === '/' ? `${host}${api}` : `${host}/${api}`;
        let body = JSON.stringify(data);
        if (headers['Content-Type'] === contentType.URL_ENCODED) {
            body = Object.entries(data)
                .map((e) => `${e[0]}=${e[1]}`)
                .join('&');
        }
        return new Promise((resovle, rejack) => {
            fetch(url, { method, body, headers })
                .then((res) => {
                res
                    .json()
                    .then((e) => resovle(e))
                    .catch((e) => rejack(e));
            })
                .catch((e) => rejack(e));
        });
    };
    const get = (api = '/api') => {
        const method = 'GET';
        const url = api.slice(0, 1) === '/' ? `${host}${api}` : `${host}/${api}`;
        return new Promise((resovle, rejack) => {
            fetch(url, { method, headers })
                .then((res) => {
                res
                    .json()
                    .then((e) => resovle(e))
                    .catch((e) => rejack(e));
            })
                .catch((e) => rejack(e));
        });
    };
    const Fetch = {
        install,
        post,
        get,
        setJWT,
    };
    exports.default = Fetch;
});
