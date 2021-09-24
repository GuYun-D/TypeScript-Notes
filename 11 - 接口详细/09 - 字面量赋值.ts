interface IPerson {
  name: string,
  age: number,
  height: number
}

/**
 * 报错，因为这样写的结果就是对象先进行类型推断，推断出类型
 * const p = {
 *  name: string,
 *  age: number,
 *  height: 10,
 *  address: string
 * }
 * 然后和接口进行比较，多了一个address属性，和IPerson接口冲突，所以报错
 */
// const p: IPerson = {
//   name: "aaa",
//   age: 12,
//   height: 10,
//   address: "佛山市"
// }


/**
 * freshness擦除：-
 * 先进行类型推导：
 * const p = {
 *  name: string,
 *  age: number,
 *  height: 10,
 *  address: string
 * }
 * 然后执行：const p: IPerson = info
 * 这里不是将一个对象赋值过来，而是将info对象的引用给赋值过来了
 * 然后执行freshness擦除，当info给p赋值的时候，会擦除多余的属性，然后再和接口进行比较
 */

const info = {
  name: "aaa",
  age: 12,
  height: 10,
  address: "佛山市"
}

const p: IPerson = info

/**
 * person: IPerson这样写同样是值给值赋值，含有多余参数接口不通过
 */

function PrintInfo(person: IPerson) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.height);
  // 不能访问address，对于类型检测来说，person只有三个参数
  // console.log(person.address);
}

// 报错
// PrintInfo({
//   name: "aaa",
//   age: 12,
//   height: 10,
//   // address: "佛山市"
// })

const info1 = {
  name: "aaa",
  age: 12,
  height: 10,
  address: "佛山市"
}

// 这样又可以了
PrintInfo(info1)