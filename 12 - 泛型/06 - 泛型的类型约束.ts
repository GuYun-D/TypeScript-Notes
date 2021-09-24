interface ILength {
  length: number
}

/**
 * 对泛型进行约束，要求传入的参数必须有length属性
 */
function getLength<T extends ILength>(arg: T) {
  return arg.length
}

getLength("abc")
getLength (["abc", "asdf"])