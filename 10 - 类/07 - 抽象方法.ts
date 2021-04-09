/**
 * 抽象类，提供其他类继承的基类，不能直接实例化
 * 抽象方法只能放在抽象方法类
 * 抽象类和方法用来定义标准
 */
abstract class Animal1 {
    public name: string
    constructor(name: string) {
        this.name = name
    }
    abstract eat(): any

    otherMethod() {
        console.log("抽象类中的非抽象方法子类可以不用实现");

    }
}

class Dog1 extends Animal1 {
    constructor(name: string) {
        super(name)
    }
    // 抽象类的子类必须实现抽象方法
    eat() {
        console.log(`${this.name}吃粮食`);
    }
}

let d = new Dog1("大黄")
console.log(d.eat());
