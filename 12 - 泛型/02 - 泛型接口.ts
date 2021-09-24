/**
 * 泛型接口
 */

interface ConfigFn {
    (value1: string, value2: string): string
}

let setData: ConfigFn = function (value1: string, value2: string) {
    return value1 + value2
}

console.log(setData("张三", "李四"));


// 泛型接口 第一种方法
interface ConfigFn1 {
    <T>(value: T): T
}

let setData1: ConfigFn1 = function <T>(value: T): T {
    return value
}

console.log(setData1<string>("张三"));

// 第二种方法
interface ConfigFn2<T> {
    (value: T): T
}

function setData2<T>(value: T): T {
    return value
}

let myData: ConfigFn2<string> = setData2

console.log(myData("太他喵乱了"));

/**
 * 简单的
 */
// interface IPerson<T1 = string, T2 = number>  添加默认类型
interface IPerson<T1, T2> {
    name: T1,
    age: T2
}


const p: IPerson<string, number> = {
    name: "张三",
    age: 16
}