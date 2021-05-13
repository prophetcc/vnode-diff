import h from "./mySnabbdom/h.js";

// const vnode1 = h("div", {}, "文字");
const vnode1 = h("div", {}, [
  h("div", {}, "文字"),
  h("div", {}, "文字"),
  h("div", {}, h("span", {}, "a")),
]);
console.log(vnode1);
