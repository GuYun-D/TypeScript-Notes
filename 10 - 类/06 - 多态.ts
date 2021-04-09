/**
 * 父类定义方法不去实现，让继承他的子类实现。每个子类有不同的表现
 * 属于继承
 */

class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    eat() {
        console.log("吃的方法");

    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }

    eat() {
        console.log("小狗吃肉");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }

    eat() {
        console.log("猫吃鱼");
    }
}