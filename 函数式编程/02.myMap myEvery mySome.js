// 高阶函数 模拟 map every some
// map
const myMap = (array, fn) => {
  const results = [];
  for (let value of array) {
    results.push(fn(value));
  }
  return results;
};

const arr = [1, 2, 35, 63, 6];
const mapRes = myMap(arr, item => `我是平方:${item * item}`);
console.log("mapRes", mapRes);

// every
const myEvery = (array, fn) => {
  let flag = true;
  for (let value of array) {
    if (!fn(value)) {
      flag = false;
      break;
    }
  }
  return flag;
};

const everyRes = myEvery(arr, item => item > 10);
console.log("everyRes", everyRes);

// some
const mySome = (array, fn) => {
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      flag = true;
      break;
    }
  }
  return flag;
};

const someRes = mySome(arr, item => item % 2 === 0);
console.log("someRes", someRes);
