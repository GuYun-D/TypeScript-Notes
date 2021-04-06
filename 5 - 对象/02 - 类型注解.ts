/**
 * 类型注解
 */
let person1: {
    name: string,
    age: number,
    sing: () => void,
    sum: (n1: number, n2: number) => number
}

person1 = {
    name: "张三",
    age: 23,
    sing: function () {
        console.log("ni hao");
    },
    sum: function (n1: number, n2: number) {
        return n1 + n2
    }
}

console.log(person1.sum(3, 7))


// 或这样写
let cars : {
    name: string,
    weigth: number,
    height: number
} = {
    name: "大众",
    weigth: 210,
    height: 140
}