// 定义一函数传入参数或者字符串，获取他们的长度
// 联合类型能简单实现的就用联合类型，反之用函数重载

/**
 * 联合类型实现
 */
// function getLength(args: string | any[]): number {
//   return args.length
// }

// console.log(getLength("abchud"));
// console.log(getLength([12, 45, "gt", "123"]));

/**
 * 重载实现
 */
function getLength(orgs: string): number
function getLength(orgs: any[]): number
function getLength(orgs: any) {
  return orgs.length
}

console.log(getLength("abchud"));
console.log(getLength([12, 45, "gt", "123"]));