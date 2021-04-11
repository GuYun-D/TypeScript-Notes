export namespace B {
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