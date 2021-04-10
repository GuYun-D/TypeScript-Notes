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
