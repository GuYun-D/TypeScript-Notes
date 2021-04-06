/**
 * 接口：为对象类型注解命名 interface
 */

interface users {
    name: string,
    age: number,
    sing: () => void
}

// 使用接口
let u1: users = {
    name : "张三",
    age: 20,
    sing: function () {
        console.log("wert");   
    }
}

console.log(u1.name);
u1.sing()

