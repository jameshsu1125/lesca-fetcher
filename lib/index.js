"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergePath = exports.formatType = exports["default"] = exports.contentType = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var contentType = exports.contentType = /*#__PURE__*/function (contentType) {
  contentType["URL_ENCODED"] = "application/x-www-form-urlencoded; charset=UTF-8";
  contentType["JSON"] = "application/json;charset=utf-8";
  return contentType;
}({});
var formatType = exports.formatType = /*#__PURE__*/function (formatType) {
  formatType[formatType["string"] = 0] = "string";
  formatType[formatType["JSON"] = 1] = "JSON";
  return formatType;
}({});
var defaultConfig = {
  hostUrl: 'https://jsonplaceholder.typicode.com/todos/1',
  contentType: contentType.JSON,
  formatType: formatType.JSON
};
var host;
var headers;
var format;
var install = function install(setting) {
  var set = _objectSpread(_objectSpread({}, defaultConfig), setting);
  var hostUrl = set.hostUrl,
    contentType = set.contentType,
    formatType = set.formatType;
  host = hostUrl.slice(-1) === '/' ? hostUrl.slice(0, -1) : hostUrl;
  format = formatType;
  headers = {
    'Content-Type': contentType
  };
};
var setJWT = function setJWT(jwt) {
  headers.Authorization = "Bearer ".concat(jwt);
};
var mergePath = exports.mergePath = function mergePath() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api';
  return api.slice(0, 1) === '/' ? "".concat(host).concat(api) : "".concat(host, "/").concat(api);
};
var post = function post() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api';
  var data = arguments.length > 1 ? arguments[1] : undefined;
  var method = 'POST';
  var body = JSON.stringify(data);
  if (headers['Content-Type'] === contentType.URL_ENCODED) {
    body = Object.entries(data).map(function (e) {
      return "".concat(e[0], "=").concat(e[1]);
    }).join('&');
  }
  if (format === formatType.JSON) {
    return new Promise(function (resolve, reject) {
      fetch(mergePath(api), {
        method: method,
        body: body,
        headers: headers
      }).then(function (res) {
        res.json().then(function (e) {
          return resolve(e);
        })["catch"](function (e) {
          return reject(e);
        });
      })["catch"](function (e) {
        return reject(e);
      });
    });
  } else {
    return new Promise(function (resolve, reject) {
      fetch(mergePath(api), {
        method: method,
        body: body,
        headers: headers
      }).then(function (res) {
        res.text().then(function (e) {
          return resolve(e);
        })["catch"](function (e) {
          return reject(e);
        });
      })["catch"](function (e) {
        return reject(e);
      });
    });
  }
};
var get = function get() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/api';
  var method = 'GET';
  if (format === formatType.JSON) {
    return new Promise(function (resolve, reject) {
      fetch(mergePath(api), {
        method: method,
        headers: headers
      }).then(function (res) {
        res.json().then(function (e) {
          return resolve(e);
        })["catch"](function (e) {
          return reject(e);
        });
      })["catch"](function (e) {
        return reject(e);
      });
    });
  } else {
    return new Promise(function (resolve, reject) {
      fetch(mergePath(api), {
        method: method,
        headers: headers
      }).then(function (res) {
        res.text().then(function (e) {
          return resolve(e);
        })["catch"](function (e) {
          return reject(e);
        });
      })["catch"](function (e) {
        return reject(e);
      });
    });
  }
};
var Fetcher = {
  install: install,
  post: post,
  get: get,
  setJWT: setJWT
};
var _default = exports["default"] = Fetcher;