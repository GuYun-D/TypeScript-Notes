/**
 * 是其它类型的子类型，包括null， undefined，代表从不会出现的值
 */

/**
 * never表示永远不会发生值的类型
 * 如果一个函数中是一个死循环或者抛出异常，
 * 函数就不会返回东西，那么void或者其他类型都不合适，那么就可以使用never类型
 */
let ner: never;

let n: null;

// function fn1(): never {
//   while (true) {

//   }
// }

// function fn2(): never {
//   throw new Error()
// }

function handleMessage(message: string | number) {
  switch (typeof message) {
    case 'string':
      console.log("string");
      break
    case 'number':
      console.log("number");
      break
    default:
      const checkk: never = message
  }
}




