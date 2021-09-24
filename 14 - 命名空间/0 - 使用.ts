/**
 * 内部模块，防止命名冲突,组织代码
 * 命名空间内的东西属于模块内部，外部无法访问，如果要访问需要export导出
 * 
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

    function foo() {
        
    }
}

var dog = new B.Dog("狼狗")
dog.eat()