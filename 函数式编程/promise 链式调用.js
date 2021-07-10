// promise 的 链式调用
const promise = new Promise((resolve, reject) => {
  resolve(100);
});

const promise2 = promise.then(
  function onfulfilled() {},
  function onrejected() {}
);

console.log(promise2);
// Promise { <pending> }

console.log(promise === promise2);
// false

promise.then((res) => {
    return new Promise((resolve, reject) => {
      resolve("aaa");
    });
  })
  .then((res) => {
    console.log(res); // 上一个then return 的 返回值 
    return "foo";
  })
  .then((res) => {
    console.log(res); 
  })
  .then((res) => {
    console.log(res); 
  });

  // 'aaa'
  // 'foo'
  // undefined
