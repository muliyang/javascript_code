// Generator 配合 promise 异步解决方案

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("settimeout 执行了");
      resolve(100);
    }, 1000);
  });
};

function * foo() {
  const res = yield myPromise();
  console.log("res", res);
}

const myGenerator = foo();

const data = myGenerator.next();
console.log("value", data);

data.value.then(res=>{
    console.log('promise执行之后 ， next',myGenerator.next());
})
    




