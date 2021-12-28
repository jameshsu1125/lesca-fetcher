"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    var _e2 = _slicedToArray(e, 2),
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
    var _e3 = _slicedToArray(e, 2),
        key = _e3[0],
        value = _e3[1];

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