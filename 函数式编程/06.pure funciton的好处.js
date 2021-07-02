// 纯函数的好处
// 1 纯函数的运算结果可以缓存，优化性能

const _ = require("loadsh");
// _.memoize(func, [resolver]) 创建一个会缓存 func 结果的函数。

// 求圆形的面积
const getArea = (r) => {
  console.log(r);
  return Math.PI * r * r;
};

const getAreaUseMomery = _.memoize(getArea);
console.log(getAreaUseMomery(5));
console.log(getAreaUseMomery(5));
console.log(getAreaUseMomery(5));
console.log(getAreaUseMomery(5));
// 5
// 78.53981633974483
// 78.53981633974483
// 78.53981633974483
// 78.53981633974483
// 只打印了一次 5 ，即第一次进行了运算，后面几次是取的缓存的数据

// 手写一个 memoize

const myMemoize = (fn) => {
  const obj = {};
  return function () {
    const keys = JSON.stringify(arguments);
    obj[keys] = obj[keys] || fn.apply(fn, arguments);
    return obj[keys];
  };
};

const getAreaUseMyMomery = myMemoize(getArea);
console.log(getAreaUseMyMomery(5));
console.log(getAreaUseMyMomery(5));
console.log(getAreaUseMyMomery(5));
console.log(getAreaUseMyMomery(5));

// 5
// 78.53981633974483
// 78.53981633974483
// 78.53981633974483
// 78.53981633974483
// myMemoize 通过内部变量 obj来缓存计算结果，缓存标记使用obj的key