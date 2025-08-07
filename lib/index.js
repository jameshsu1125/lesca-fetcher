var d = /* @__PURE__ */ ((t) => (t.URL_ENCODED = "application/x-www-form-urlencoded; charset=UTF-8", t.JSON = "application/json;charset=utf-8", t))(d || {}), l = /* @__PURE__ */ ((t) => (t[t.string = 0] = "string", t[t.JSON = 1] = "JSON", t))(l || {});
const p = {
  hostUrl: "https://jsonplaceholder.typicode.com/todos/1",
  contentType: d.JSON,
  formatType: l.JSON
};
let f, s, m;
const u = (t) => {
  const a = { ...p, ...t }, { hostUrl: c, contentType: o, formatType: e } = a;
  f = c.slice(-1) === "/" ? c.slice(0, -1) : c, m = e, s = {
    "Content-Type": o
  };
}, O = (t) => {
  s.Authorization = `Bearer ${t}`;
}, N = (t) => {
  s = {
    ...s,
    ...t
  };
}, i = (t = "/api") => t.slice(0, 1) === "/" ? `${f}${t}` : `${f}/${t}`, J = (t = "/api", a) => {
  const c = "POST";
  let o = JSON.stringify(a);
  return s["Content-Type"] === d.URL_ENCODED && (o = Object.entries(a).map((e) => `${e[0]}=${e[1]}`).join("&")), m === l.JSON ? new Promise((e, n) => {
    fetch(i(t), { method: c, body: o, headers: s }).then((r) => {
      r.json().then((h) => e(h)).catch((h) => n(h));
    }).catch((r) => n(r));
  }) : new Promise((e, n) => {
    fetch(i(t), { method: c, body: o, headers: s }).then((r) => {
      r.text().then((h) => e(h)).catch((h) => n(h));
    }).catch((r) => n(r));
  });
}, S = (t = "/api") => m === l.JSON ? new Promise((c, o) => {
  fetch(i(t), { method: "GET", headers: s }).then((e) => {
    e.json().then((n) => c(n)).catch((n) => o(n));
  }).catch((e) => o(e));
}) : new Promise((c, o) => {
  fetch(i(t), { method: "GET", headers: s }).then((e) => {
    e.text().then((n) => c(n)).catch((n) => o(n));
  }).catch((e) => o(e));
}), T = {
  install: u,
  post: J,
  get: S,
  setJWT: O,
  setHeader: N
};
export {
  T as default,
  i as mergePath
};
