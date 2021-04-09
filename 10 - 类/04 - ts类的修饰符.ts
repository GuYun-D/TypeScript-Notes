/**
 * 类的修饰符
 * public：共有，在类面，子类，类外面都是共有的
 * protected：保护类型，在类里面，子类里面可以访问，类外面无法访问
 * private：私有，类面可以访问，子类，类外面不能访问
 * 属性不加修饰符，默认piblic
 */

// public
class Person6 {
    public name: string;   // 属性

    constructor(name: string) { // 构造函数，实例化类时触发
        this.name = name
    }

    run(): string {
        return `${this.name}在运动`
    }

    getName(): string {
        return this.name
    }

    setName(NewName: string): void {
        this.name = NewName
    }
}

class Man1 extends Person6 {
    constructor(name: string) {
        super(name)
    }

    work(): string {
        return `${this.name}在工作`
    }

    // 父子类有相同的方法时，子类在调用时找的是自己的方法
    run(): string {
        return `${this.name}在运动 ---- 子类方法`
    }
}

let m1 = new Man1("李四")
// console.log(m1.work());

// protected ---------------------------------------------------------

class Person7 {
    protected name: string;   // 属性

    constructor(name: string) { // 构造函数，实例化类时触发
        this.name = name
    }

    run(): string {
        return `${this.name}在运动`
    }

    getName(): string {
        return this.name
    }

    setName(NewName: string): void {
        this.name = NewName
    }
}

class Man2 extends Person7 {
    constructor(name: string) {
        super(name)
    }

    work(): string {
        return `${this.name}1111在工作`
    }
}

let m2 = new Man2("李四")
// 调用父类方法
console.log(m2.getName());

// private----------------------------------------------------------
class Person8 {
    private name: string;   // 属性

    constructor(name: string) { // 构造函数，实例化类时触发
        this.name = name
    }

    run(): string {
        return `${this.name}在运动`
    }

    getName(): string {
        return this.name
    }

    setName(NewName: string): void {
        this.name = NewName
    }
}

class Man3 extends Person8 {
    constructor(name: string) {
        super(name)
    }

    // work(): string {
    // return `${this.name}1111在工作`
    // }
}

let m3 = new Man3("李四")
m3.getName() // 直接报错