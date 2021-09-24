declare module "lodash" {
  export function join(arr: any[]): void
}

/**
 * 声明变量
 * 在模板html文件声明了两个变量，然后再main.ts中使用
 * 这样必不会通过ts的检测的，因为ts不知到我定义的变量是否真的
 * 存在
 * webpack打包成功后,js文件会放在模板的script之下，所以按照js的
 * 执行顺序，main.ts中肯定可以访问到，所以在这对变量进行声明
 * 就可以跳过ts的检测
 */
declare let nameTest: string
declare let ageTest: number


/**
 * 声明函数
 */
declare function foo(): void

/**
 * 声明类
 */
declare class foo1 {
  name: string
  age: number
  constructor(name: string, age: number)
}

/**
 * 声明文件
 */
// 将.jpg的文件当作模块使用
declare module "*.jpg"

// declare module "*.vue" {

// }

/**
 * 声明命名空间
 */
declare namespace $ {
  export function ajax(settings: any) {
  }
}