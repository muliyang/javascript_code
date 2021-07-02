// 纯函数 
// · 相同的输入永远会得到相同的输出，并且没有任何可观察的副作用
// · 纯函数类似于数学中的描述输入和输出之前的函数关系 y=f(x)

// slice 和 splice
const array = [1,2,3,4,5,6,7];

console.log(array.slice(0,3)) 
console.log(array.slice(0,3)) 
console.log(array.slice(0,3)) // slice(开始的下标，结束的下标，不包含当前下标)

console.log(array.splice(0,3));
console.log(array.splice(0,3));
console.log(array.splice(0, 3));  // splice(开始的下标，截取的个数)

// slice 每次输出的结果是一样的 [ 1, 2, 3 ]  是纯函数
// splice 会改变原数组，每次输出的结果不一样  不是纯函数


// 纯函数demo
const getSum = (n , n1) => n + n1;
console.log(getSum(1, 2));
console.log(getSum(1, 2));
console.log(getSum(1, 2));

// 函数式编程不会保留计算过程中间的结果，所以变量是不可变的（无状态的）
// 可以把颗粒度划分小，把一个函数的执行结果交给另外一个函数处理
