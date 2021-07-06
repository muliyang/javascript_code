// lodash 和 lodash/fp 中map 方法的区别

// demo 把一个字符串数组中的所有元素 都转换成整型

// 使用lodash 实现
// lodash 中 数据优先 函数置后

const _ = require("lodash");
const arr = ["23", "8", "10"];

// 写法一
// const res = _.map(arr,(item)=>Number(item).toFixed(0));
// console.log(res);
// [ '23', '8', '10' ]

// 写法二
// const res = _.map(arr,item=>parseInt(item)) 
// console.log(res);
// [ 23, 8, 10 ]

// 写法三
const res = _.map(arr, parseInt);
console.log(res);
[ 23, NaN, 2 ]

// 写法三报错了 和 _map 的第二个参数的 入参有关
// _.map(collection, [iteratee=_.identity])#
// 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：(value, index|key, collection).

// 从上面的概念 可以看出 写法三 _.map的执行过程
// -> '23' parseInt('23',0,[ '23', '8', '10' ]) 
// -> '8' parseInt('8',1,[ '23', '8', '10' ]) 
// -> '10' parseInt('10',2,[ '23', '8', '10' ]) 

// 但是实际上 parseInt 方法是有两个参数的  parseInt(string, radix) raidx要换成的进制数
// 所以会出现问题

// 使用 lodash fp模块
const fp = require('lodash/fp');
const fpRes = fp.map(parseInt,arr);
console.log(fpRes);

// [ 23, 8, 10 ]
// fp模块是函数优先的 并且这个函数只接受一个参数 value 所以没有问题
// 两个map 方法的区别是 iteratee函数接收的参数不一样 