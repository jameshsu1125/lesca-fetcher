var p = /* @__PURE__ */ ((t) => (t.URL_ENCODED = "application/x-www-form-urlencoded; charset=UTF-8", t.JSON = "application/json;charset=utf-8", t))(p || {}), d = /* @__PURE__ */ ((t) => (t[t.string = 0] = "string", t[t.JSON = 1] = "JSON", t))(d || {});
const m = {
  hostUrl: "https://jsonplaceholder.typicode.com/todos/1",
  contentType: "application/json;charset=utf-8",
  formatType: 1
  /* JSON */
};
let l, s, f;
const u = (t) => {
  const r = { ...m, ...t }, { hostUrl: o, contentType: c, formatType: e } = r;
  l = o.slice(-1) === "/" ? o.slice(0, -1) : o, f = e, s = new Headers({
    "Content-Type": c
  });
}, w = (t) => {
  s.set("Authorization", `Bearer ${t}`);
}, T = (t) => {
  Object.entries(t).forEach(([r, o]) => {
    s.set(r, o);
  });
}, i = (t = "/api") => t.slice(0, 1) === "/" ? `${l}${t}` : `${l}/${t}`, O = (t = "/api", r) => {
  const o = "POST";
  let c = JSON.stringify(r);
  return s.get("Content-Type") === "application/x-www-form-urlencoded; charset=UTF-8" && (c = Object.entries(r).map((e) => `${e[0]}=${e[1]}`).join("&")), f === 1 ? new Promise((e, n) => {
    fetch(i(t), { method: o, body: c, headers: s }).then((h) => {
      h.json().then((a) => e(a)).catch((a) => n(a));
    }).catch((h) => n(h));
  }) : new Promise((e, n) => {
    fetch(i(t), { method: o, body: c, headers: s }).then((h) => {
      h.text().then((a) => e(a)).catch((a) => n(a));
    }).catch((h) => n(h));
  });
}, g = (t = "/api") => f === 1 ? new Promise((o, c) => {
  fetch(i(t), { method: "GET", headers: s }).then((e) => {
    e.json().then((n) => o(n)).catch((n) => c(n));
  }).catch((e) => c(e));
}) : new Promise((o, c) => {
  fetch(i(t), { method: "GET", headers: s }).then((e) => {
    e.text().then((n) => o(n)).catch((n) => c(n));
  }).catch((e) => c(e));
}), y = {
  install: u,
  post: O,
  get: g,
  setJWT: w,
  setHeader: T
};
export {
  p as contentType,
  y as default,
  d as formatType,
  i as mergePath
};
