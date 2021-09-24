/**
 * 函数作为参数时的类型
 */
function foo() { }
// 函数类型
type FooFnType = () => void
function bar(fn: FooFnType) { }

bar(foo)

/**
 * 定义常量时函数类型
 */
type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2
}

// 栗子
function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
  return fn(n1, n2)
}

let res = calc(10, 10, function (a1, a2) {
  return a1 + a2
})

console.log(res);
