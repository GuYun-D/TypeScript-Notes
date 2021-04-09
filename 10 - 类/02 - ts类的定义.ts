class Person4 {
    name: string;   // 属性

    constructor(name: string) { // 构造函数，实例化类时触发
        this.name = name
    }

    run(): void {
        console.log(this.name);

    }

    getName(): string {
        return this.name
    }

    setName(NewName: string): void {
        this.name = NewName
    }
}

let p4 = new Person4("万民庆")

// p4.run()
p4.setName("代文辉")
console.log(p4.getName());
