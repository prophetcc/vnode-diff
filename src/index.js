import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

// 创建patch函数
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const vnode1 = h("ul", {}, [
  h("li", {}, "A"),
  h("li", {}, "B"),
  h("li", {}, "C"),
  h("li", {}, "D"),
]);
const container = document.getElementById("container");
patch(container, vnode1);

const vnode2 = h("ol", {}, [
  h("li", {}, "A"),
  h("li", {}, "B"),
  h("li", {}, "C"),
  h("li", {}, "D"),
  h("li", {}, "E"),
]);

// 点击按钮时，将vnode1变为vnode2
const btn = document.getElementById("btn");
btn.onclick = function () {
  patch(vnode1, vnode2);
};
