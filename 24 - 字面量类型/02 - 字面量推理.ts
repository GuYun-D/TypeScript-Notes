// const info = {
//   name: "yun",
//   age: 19
// }

// info.name = "try"

type Method = "GET" | "POST"

function request(url: string, method: Method) {}

/**
 * 解决一：
 * 
 */
// type request = {
//   url: string,
//   method: Method
// }

// const options: request = {
//   url: "http:// yunyun.org/asv",
//   method: "POST"
// }

const options = {
  url: "http:// yunyun.org/asv",
  method: "POST"
} as const


/**
 * 这样存在问题，options并没有进行类型推导，所以进行类型推导
 * 推导的结果就是：
 *  const opyioms = {
 *    url: string,
 *    method: string
 *  }
 * request(options.url, options.method),
 * 所以这样传入的参数options.method就是string,
 * 而request函数参数method限定的类型是Method类型，所以报错
 * 
 * 解决：
 *  1.给options限定类型
 *  2.使用类型断言：request(options.url, options.method as Method)
 *  3.使用as const: const options = {...} as const
 */
request(options.url, options.method)