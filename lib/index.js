var d = /* @__PURE__ */ ((t) => (t.URL_ENCODED = "application/x-www-form-urlencoded; charset=UTF-8", t.JSON = "application/json;charset=utf-8", t))(d || {}), l = /* @__PURE__ */ ((t) => (t[t.string = 0] = "string", t[t.JSON = 1] = "JSON", t))(l || {});
const p = {
  hostUrl: "https://jsonplaceholder.typicode.com/todos/1",
  contentType: d.JSON,
  formatType: l.JSON
};
let f, c, m;
const O = (t) => {
  const r = { ...p, ...t }, { hostUrl: o, contentType: s, formatType: e } = r;
  f = o.slice(-1) === "/" ? o.slice(0, -1) : o, m = e, c = new Headers({
    "Content-Type": s
  });
}, u = (t) => {
  c.set("Authorization", `Bearer ${t}`);
}, N = (t) => {
  Object.entries(t).forEach(([r, o]) => {
    c.set(r, o);
  });
}, i = (t = "/api") => t.slice(0, 1) === "/" ? `${f}${t}` : `${f}/${t}`, J = (t = "/api", r) => {
  const o = "POST";
  let s = JSON.stringify(r);
  return c.get("Content-Type") === d.URL_ENCODED && (s = Object.entries(r).map((e) => `${e[0]}=${e[1]}`).join("&")), m === l.JSON ? new Promise((e, n) => {
    fetch(i(t), { method: o, body: s, headers: c }).then((h) => {
      h.json().then((a) => e(a)).catch((a) => n(a));
    }).catch((h) => n(h));
  }) : new Promise((e, n) => {
    fetch(i(t), { method: o, body: s, headers: c }).then((h) => {
      h.text().then((a) => e(a)).catch((a) => n(a));
    }).catch((h) => n(h));
  });
}, S = (t = "/api") => m === l.JSON ? new Promise((o, s) => {
  fetch(i(t), { method: "GET", headers: c }).then((e) => {
    e.json().then((n) => o(n)).catch((n) => s(n));
  }).catch((e) => s(e));
}) : new Promise((o, s) => {
  fetch(i(t), { method: "GET", headers: c }).then((e) => {
    e.text().then((n) => o(n)).catch((n) => s(n));
  }).catch((e) => s(e));
}), w = {
  install: O,
  post: J,
  get: S,
  setJWT: u,
  setHeader: N
};
export {
  w as default,
  i as mergePath
};
