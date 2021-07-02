// 闭包 closure

const fn = () => {
  const str = "hello !";
  return () => {
    console.log(str);
  };
};
const fn2 = fn();
fn2();

// fn 2 用到了fn return的函数，在return的函数中，访问了fn的变量str ;
// fn2 所在的作用域 可以访问到fn作用域的变量，并且因为引用了变量，该变量不会销毁了

// 闭包的概念 可以在B作用域中调用A作用域的函数，并且还可以访问到A作用域的成员
// 当函数执行完之后，会从栈内存中释放，并且函数中的内部变量也会一起移除
// 但是当使用闭包之后，堆上面的作用域成员因为被外部引用 所以不能被释放。因此在A作用域中，内部函数还可以访问到外部函数的成员

// closure demo
console.log(Math.pow(4, 2));
console.log(Math.pow(5, 2));

const makePow = (power) => {
  return (number) => Math.pow(number, power);
};

// 求平方
const makeTwoPow = makePow(2);
console.log(makeTwoPow(4));
console.log(makeTwoPow(5));

// 求三次方
const makeThreePow = makePow(3);
console.log(makeThreePow(4));
console.log(makeThreePow(5));

// 员工工资fn （基本工资 + 绩效工资） 特点 同级别员工基本工资相同
const getSalary = (level) => {
  let baseMoney = 0;
  switch (level) {
    case 1:
      baseMoney = 12000;
      break;
    case 2:
      baseMoney = 15000;
      break;
    default:
      baseMoney = 10000;
  }

  return (performance) => baseMoney + performance;
};

const getSalary1 = getSalary(1);
const getSalary2 = getSalary(2);

console.log("郑xx", getSalary1(3000));
console.log("李xx", getSalary1(2100));
console.log("王xx", getSalary2(500));
console.log("赵xx", getSalary2(4000));
