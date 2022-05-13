"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.contentType = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var contentType;
exports.contentType = contentType;

(function (contentType) {
  contentType["URL_ENCODED"] = "application/x-www-form-urlencoded; charset=UTF-8";
  contentType["JSON"] = "application/json;charset=utf-8";
})(contentType || (exports.contentType = contentType = {}));

var defaultConfig = {
  hostUrl: 'https://jsonplaceholder.typicode.com/todos/1',
  contentType: contentType.URL_ENCODED
};
var host;
var headers;

var install = function install(setting) {
  var set = _objectSpread(_objectSpread({}, defaultConfig), setting);

  var hostUrl = set.hostUrl,
      contentType = set.contentType;
  host = hostUrl.slice(-1) === '/' ? hostUrl.slice(0, -1) : hostUrl;
  headers = {
    'Content-Type': contentType
  };
};

var setJWT = function setJWT(jwt) {
  headers.jwt = jwt;
};

var post = function post() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api';
  var data = arguments.length > 1 ? arguments[1] : undefined;
  var method = 'POST';
  var url = api.slice(0, 1) === '/' ? "".concat(host).concat(api) : "".concat(host, "/").concat(api);
  var body = JSON.stringify(data);

  if (headers['Content-Type'] === contentType.URL_ENCODED) {
    body = Object.entries(data).map(function (e) {
      return "".concat(e[0], "=").concat(e[1]);
    }).join('&');
  }

  return new Promise(function (resovle, rejack) {
    fetch(url, {
      method: method,
      body: body,
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (e) {
      return resovle(e);
    })["catch"](function (e) {
      return rejack(e);
    });
  });
};

var get = function get() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api';
  var method = 'GET';
  var url = api.slice(0, 1) === '/' ? "".concat(host).concat(api) : "".concat(host, "/").concat(api);
  return new Promise(function (resovle, rejack) {
    fetch(url, {
      method: method,
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (e) {
      return resovle(e);
    })["catch"](function (e) {
      return rejack(e);
    });
  });
};

var Fetch = {
  install: install,
  post: post,
  get: get,
  setJWT: setJWT
};
var _default = Fetch;
exports["default"] = _default;