var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.contentType = void 0;
    var contentType;
    (function (contentType) {
        contentType["URL_ENCODED"] = "application/x-www-form-urlencoded; charset=UTF-8";
        contentType["JSON"] = "application/json;charset=utf-8";
    })(contentType = exports.contentType || (exports.contentType = {}));
    var defaultConfig = {
        hostUrl: 'https://jsonplaceholder.typicode.com/todos/1',
        contentType: contentType.URL_ENCODED,
    };
    var host;
    var headers;
    var install = function (setting) {
        var set = __assign(__assign({}, defaultConfig), setting);
        var hostUrl = set.hostUrl, contentType = set.contentType, jwt = set.jwt;
        host = hostUrl.slice(-1) === '/' ? hostUrl.slice(0, -1) : hostUrl;
        headers = {
            'Content-Type': contentType,
            jwt: "Bearer ".concat(jwt),
        };
    };
    var post = function (api, data) {
        if (api === void 0) { api = '/api'; }
        var method = 'POST';
        var url = api.slice(0, 1) === '/' ? "".concat(host).concat(api) : "".concat(host, "/").concat(api);
        var body = JSON.stringify(data);
        if (headers['Content-Type'] === contentType.URL_ENCODED) {
            body = Object.entries(data)
                .map(function (e) { return "".concat(e[0], "=").concat(e[1]); })
                .join('&');
        }
        return new Promise(function (resovle, rejack) {
            fetch(url, { method: method, body: body, headers: headers })
                .then(function (res) { return res.json(); })
                .then(function (e) { return resovle(e); })
                .catch(function (e) { return rejack(e); });
        });
    };
    var get = function (api) {
        if (api === void 0) { api = '/api'; }
        var method = 'GET';
        var url = api.slice(0, 1) === '/' ? "".concat(host).concat(api) : "".concat(host, "/").concat(api);
        return new Promise(function (resovle, rejack) {
            fetch(url, { method: method, headers: headers })
                .then(function (res) { return res.json(); })
                .then(function (e) { return resovle(e); })
                .catch(function (e) { return rejack(e); });
        });
    };
    var Fetch = {
        install: install,
        post: post,
        get: get,
    };
    exports.default = Fetch;
});
