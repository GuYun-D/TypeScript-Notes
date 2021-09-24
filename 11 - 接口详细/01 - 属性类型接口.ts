/**
 * 接口：在面向对象的编程语言中，接口是一种规范的定义，它定义了行为和动作的规范
 *      在程序设计中，接口起到一种限制和规范的作用，接口定义了某一类所需要遵循的的规范
 *      接口不关心这些类的内部状态数据，也不关心这些类的方法的实现细节，他只规定这些类里
 *      必须提供某些方法
 */

// 属性接口     对json的约束，可以用于对象类型的声明，有一个规范，在接口名字前加一个“I”，表示是接口
interface FullName {
    firstName: string;
    secondName: string;
}

function printName(name: FullName) {
    console.log(name.firstName + "------------------" + name.secondName);
}

/**
 * 如此调用，只能传入接口定义的参数，不能有其他参数
 */
// printName({
//     age: 23,
//     firstName: "张三",
//     secondName: "王五"
// })

/**
 * 这样可以传入其他参数
 */
let obj = {
    age: 23,
    firstName: "张三",
    secondName: "王五"
}

printName(obj)