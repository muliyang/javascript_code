// promise 的 链式调用
const promise = new Promise((resolve,reject)=>{
	resolve(100)
})

const promise2 = promise.then(
  function onfulfilled() {},
  function onrejected() {}
);

console.log(promise2);
// Promise { <pending> }

console.log(promise === promise2);
// false