import vnode from "./vnode.js";

// 编写一个低配版h函数，这个函数必须接收三个参数
// 也就是说函数必须是下面三种形式之一
// h('div', {}, '文字')
// h('div', {}, [])
// h('div', {}, h())
export default function (sel, data, c) {
  // 检查参数的个数
  if (arguments.length !== 3) {
    throw new Error("h函数必须接收三个参数");
  }
  // 检查参数c的类型
  if (typeof c === "string" || typeof c === "number") {
    // 说明现在是第一种形态
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    // 说明是第二种形态
    let children = [];
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === "object" && c[i].hasOwnProperty("sel"))) {
        throw new Error("数组中的每一项必须是h函数");
      }
      children.push(c[i]);
    }
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c === "object" && c.hasOwnProperty("sel")) {
    // 如果c是h函数的返回值，即一个对象
    // 即传入的c是唯一的children，不用执行c，因为测试中已经执行了c
    let children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error("第三个参数接收的值形式不正确");
  }
}
