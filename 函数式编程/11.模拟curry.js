// 模拟实现 lodash 的 curry 方法

const myCurry = (fn) => {
  const fnLen = fn.length;
  return function curried(...args) {
    if (args.length >= fnLen) {  
      return fn(...args);
    } else {
      return function (){
        return curried(...args.concat(Array.from(arguments)));
        // 这里是一个闭包。 ...args会存储之前传递的实参
        // 新传进来的实参是 arguments
      }
    }
  };
};


const getSum = (a, b, c) => a + b + c;
const carriedGetSum = myCurry(getSum);
console.log(carriedGetSum(1, 2, 3));
console.log(carriedGetSum(1, 2)(3));
console.log(carriedGetSum(1)(2)(3));
// 6
// 6
// 6

// 01 curry的参数是纯函数 根据curry的语法 ，如果参数数量满足 直接执行纯函数 ； 不满足 则返回一个函数 ，准备接受剩余参数
// 02 实际传递参数的个数 和 形参个数对比； fn.length 实参数量 ； args 行参数量
// 03 实参个数 大于等于 形参的个数 直接调用函数 并且 return 函数执行的结果
// 04 实参个数 小于 形参的个数 要返回一个函数，存储当前的实参。并等待剩余的参数
// 05 存储当前的实参 可以通过 args 来实现，因为是一个闭包，args会记录之前的实参
// 06 返回一个等待剩余参数的函数，其实就是返回当前的函数 所以需要把匿名函数改成有定义名称的函数
// 07 返回函数的实参 使用 arguments 来获取
// 08 之前的实参 和 当前的实参 concat 合并、 即 args.concat(Array.from(arguments))
// 09 注意 函数调用的时候 要一项一项传递参数 所以每次都需要展开 fn(...args)