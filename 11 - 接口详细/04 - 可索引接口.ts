/**
 * 可索引接口：数组，对象的约束
 */
// 数组
interface UserArr {
    /**
     * 索引是number
     * 元素是string
     */
    // [index: number]: string;
    [index: number]: any
}

var arr: UserArr = [123, '234']
// var arr: UserArr = ['123', '234']

console.log(arr[0]);



// 对象
interface UserObj {
    [index: string]: any
}

let user: UserObj = { name: "fdte", age: 30 }

console.log(user.name);


// 类类型接口: 对类的约束，类似抽象类

interface Animal {
    name: string;
    eat(str: string): void
}

class Dog implements Animal {
    name: string
    constructor(name: string){
        this.name = name
    }

    eat(){
        console.log(`${this.name}吃粮食`);   
    }
}

let d = new Dog('小黑')
d.eat()