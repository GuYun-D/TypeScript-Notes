/**
 * 内部模块，防止命名冲突,组织代码
 */


namespace B {
    interface Animal {
        name: string;
        eat(str: string): void
    }

    export class Dog implements Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }

        eat() {
            console.log(`${this.name}吃粮食`);
        }
    }
}

var dog = new B.Dog("狼狗")
dog.eat()