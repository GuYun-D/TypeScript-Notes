/**
 * 可选链,es11新特性
 * 可选链使用可选链操作符 ?.；
 * 它的作用是当对象的属性不存在时，会短路，直接返回undefined，如果存在，那么才会继续执行；
 * 虽然可选链操作是ECMAScript提出的特性，但是和TypeScript一起使用更版本
 */

type Person = {
  name: string,
  firend?: {
    name: string,
    age?: number
  }
}

const info: Person = {
  name: "张三",
  firend: {
    name: "李四"
  }
}

/**
 * 因为friend属性是可选的，所以在访问的时候，有可能是undefined
 * 所以需要使用可选链
 * 如果friend有值那就取值，没有值就短路返回undefined
 */
console.log(info.firend?.name);
console.log(info.firend?.age);
