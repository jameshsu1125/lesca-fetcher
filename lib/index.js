"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var defaultKeyForAPI = '_lesca_baseFetchURL';

var install = function install() {
  var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var last = baseURL.slice(-1);
  var url = '';
  if (last === '/') url = baseURL.slice(0, -1);else url = baseURL;
  window[defaultKeyForAPI] = url;
};

var post = function post() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    name: 'name',
    age: '18'
  };
  var baseURL = window[defaultKeyForAPI];
  var method = 'POST';
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  };
  var first = api.slice(0, 1);
  var url = '';
  if (first !== '/') url = "".concat(baseURL, "/").concat(api);else url = "".concat(baseURL).concat(api);
  var body = Object.entries(data).map(function (e) {
    var _e = (0, _slicedToArray2["default"])(e, 2),
        key = _e[0],
        value = _e[1];

    return "".concat(key, "=").concat(value);
  }).join('&');
  return new Promise(function (res, rej) {
    fetch(url, {
      method: method,
      body: body,
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (e) {
      return res(e);
    })["catch"](function (e) {
      return rej(e);
    });
  });
};

var get = function get() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    name: 'name',
    age: '18'
  };
  var baseURL = window[defaultKeyForAPI];
  var method = 'GET';
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  };
  var first = api.slice(0, 1);
  var url = '';
  if (first !== '/') url = "".concat(baseURL, "/").concat(api);else url = "".concat(baseURL).concat(api);
  var body = Object.entries(data).map(function (e) {
    var _e2 = (0, _slicedToArray2["default"])(e, 2),
        key = _e2[0],
        value = _e2[1];

    return "".concat(key, "=").concat(value);
  }).join('&');
  return new Promise(function (res, rej) {
    fetch(url, {
      method: method,
      body: body,
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (e) {
      return res(e);
    })["catch"](function (e) {
      return rej(e);
    });
  });
};

module.exports = {
  install: install,
  post: post,
  get: get
};