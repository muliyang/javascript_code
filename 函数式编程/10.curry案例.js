// 柯理化案例
const _ = require("loadsh");

// "".match(/\s+/g)  正则表达式 匹配字符串中的所有空格
// "".match(/\d+/g)  这则表达式 匹配字符串中的所有数字

// 封装一个匹配方法
const matchNum = (reg, str) => str.match(reg);

// 上面的方法 如果同一个正则使用多次，可以改造一下
const curriedMatchNum = (reg) => {
  return (str) => str.match(reg);
};
const match1 = curriedMatchNum(/\d+/g);
console.log(match1("xaskjl1d1"));
console.log(match1("4 22"));

// 使用curry
const curryMatch = _.curry(function (reg, str) {
  return str.match(reg);
});
console.log(curryMatch(/\d+/g, "xaskjl1d1"));
console.log(curryMatch(/\d+/g)("xaskjl1d1"));

// 通过 curryMatch 函数来生成新的函数 判断字符串中是否含有数字
const hasNumFn = (str) => {
  return curryMatch(/\d+/g)(str);
};
console.log("hasNumFn", hasNumFn("xxx"));
console.log("hasNumFn", hasNumFn("xx2x2"));

// 过滤一个数组中的所有含有数字的成员项
const arr = ["2", "xxx", "22", 22, "ad", "5", 8, "xx1"];
const filterNumFn = (array) => {
  const result = [];
  for (let val of array) {
    if (hasNumFn(`${val}`)) {
      result.push(val);
    }
  }
  return result;
};
console.log("filterNumFn", filterNumFn(arr));

// 使用数组的filter方法，来过滤数组的数字成员项。并封装成一个柯理化函数
const filterFn = _.curry(function (reg, array) {
  return array.filter((item) => `${item}`.match(reg));
});
console.log("filterFn", filterFn(/\d+/g)(arr));

// 继续抽离
const filterFn2 = _.curry(function (fn, array) {
  return array.filter(fn);
});
const filterNumber = filterFn2(function (item) {
  return `${item}`.match(/\d+/g);
});
console.log("filterNumber", filterNumber(arr));

const filterNumber2 = filterFn2((item) => hasNumFn(`${item}`));
console.log("filterNumber2", filterNumber2(arr));

const filterNumber3 = filterFn2((item) => `${item}`.match(/\d+/g));
console.log("filterNumber3", filterNumber3(arr));

// 使用纯函数 柯理化的目的是为了更好的复用共用代码
const matchSpace = (str) => `${str}`.match(/\s+/g);
const hasSpaceCurry = _.curry((fn, arr) => arr.filter(fn));
const hasSpace = hasSpaceCurry(matchSpace);

console.log("hasSpace" , hasSpace(['x xx','2d d','222','x1']))
console.log("hasSpace", hasSpace(["gg", "xd", "1 3", "11"]));

// [ '1', '1' ]
// [ '4', '22' ]
// [ '1', '1' ]
// [ '1', '1' ]
// hasNumFn false
// hasNumFn true
// filterNumFn [ '2', '22', 22, '5', 8, 'xx1' ]
// filterFn [ '2', '22', 22, '5', 8, 'xx1' ]
// filterNumber [ '2', '22', 22, '5', 8, 'xx1' ]
// filterNumber2 [ '2', '22', 22, '5', 8, 'xx1' ]
// filterNumber3 [ '2', '22', 22, '5', 8, 'xx1' ]
// hasSpace [("x xx", "2d d")];
// hasSpace ["1 3"];
