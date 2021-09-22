function foo(): string {
  return "asb"
}

function bar(): number {
  return 123
}

let flag = true

/**
 * 不能明确知道result的类型
 * unknown: 只能赋值给any和unknown类型
 * any：可以给任意类型
 * 防止乱用，不能再明确的进行赋类型
 */
let result: unknown;

if (flag) {
  result = foo()
}else {
  result = bar()
}

// 编译不通过
// result: string = 123

console.log(result);
