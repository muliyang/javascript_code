// 柯理化 
// · 当一个函数有多个参数的时候，可以先传递一部分参数调用它（这部分参数以后永远不变）；
// · 然后返回一个新的函数接受剩余的参数，返回结果。

// 硬编码
const checkAge = age =>{
    const limit = 18;
    return age >= limit
}

// 取消硬编码，并且是纯函数
const checkAgePure = (limit , age)=> age >= limit;
console.log(checkAgePure(18,22));
console.log(checkAgePure(18,10));
console.log(checkAgePure(22, 12));

// 18 可能会使用多次，再次优化 => 函数的柯理化
// const checkAgeFn = (limit) =>{
//     return (age)=>{
//         return age >= limit
//     }
// }

// 使用 es6 实现 
const checkAge = limit => (age => age >= limit)

const checkAge18 = checkAgeFn(18)
console.log(checkAge18(22))
console.log(checkAge18(12))
console.log(checkAge18(17));
const checkAge22 = checkAgeFn(22)
console.log(checkAge22(22));