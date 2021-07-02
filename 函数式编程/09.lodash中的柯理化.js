// lodash 中 carry 方法的基本使用
// 一个函数 有几个参数 就叫做几元函数。例：1个参数 -> 一元函数 ； 3个参数 -> 三元函数
// carry 方法： 需要的参数是一个纯函数。它可以把多元函数转换成一元函数
//              如果调用的时候，传递了所有纯函数的参数，会直接执行。
//              如果只传递了部分参数，carry会返回一个新的函数，并且等待剩余参数的传入

const _ = require("loadsh");

const getSum = (a, b, c) => a + b + c;

const curriedSum = _.curry(getSum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2, 3));

const oneParam = curriedSum(1, 2);
console.log(oneParam(3));
console.log(oneParam(4));

// 6
// 6
// 6
// 6
// 7