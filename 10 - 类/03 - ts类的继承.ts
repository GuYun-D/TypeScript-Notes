class Person5 {
    name: string;   // 属性

    constructor(name: string) { // 构造函数，实例化类时触发
        this.name = name
    }

    run(): string {
        return `${this.name}在运动-----------父类方法`
    }

    getName(): string {
        return this.name
    }

    setName(NewName: string): void {
        this.name = NewName
    }
}

// let p5 = new Person5("万民庆")
// console.log(p5.run());

/**
 * ts的继承
 * 关键字：extends 和 super
 */
class Man extends Person5 {
    constructor(name: string) {
        super(name)
    }

    work(): string {
        return `${this.name}在工作`
    }

    // 父子类有相同的方法时，子类在调用时找的是自己的方法
    run(): string {
        console.log(super.run());

        return `${this.name}在运动 ---- 子类方法`
    }
}

let m = new Man("代文辉")
// console.log(m.work());
console.log(m.run());
