// 高阶函数 特点一 函数可以做为参数

const myForEach = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

const arr = [1, 5, 6, 3, 32, 42];
myForEach(arr, (item) => {
  console.log(item);
});

const myFilter = (array, fn) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      results.push(array[i]);
    }
  }
  return results;
};

const evenNum = myFilter(arr, (item) => {
  return item % 2 !== 0;
});
console.log(evenNum);

// 高阶函数特点二 函数可以作为返回值
const demoFn = () => {
  return (str) => {
    console.log(str);
  };
};
demoFn()("Hello !");

// 仿写 loadsh 的 once 函数
const myOnce = function (fn) {
  let flag = false;
  return function () {
    if (!flag) {
      flag = true;
      fn.apply(this, arguments);
    }
  };
};

const payFn = myOnce((money) => {
  console.log(`您支付了 ${money} RMB`);
});

payFn(5);
payFn(15);
payFn(35);


