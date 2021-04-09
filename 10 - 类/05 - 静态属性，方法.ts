class Person9 {
    public name: String;
    public age = 20
    // 声明静态属性
    static sex: string = "男"

    constructor(name: string) {
        this.name = name
    }

    /**
     * 实例方法，实例化再调用 
     */
    run() {
        return `${this.name} 在运动`
    }

    work() {
        return `${this.name} 在工作`
    }

    /**
     * 静态方法
     */
    static printName() {
        console.log("静态方法");
        /**
         * 静态方法不能直接调用类里面的属性、方法
         */
        // console.log("静态方法" + this.age);
        // 静态方法中调用静态属性
        console.log(Person9.sex);
    
    }
}

let p9 = new Person9("万民庆")

// 实例方法的使用
// console.log(p9.work());
// console.log(p9.run());

// 调用静态方法
Person9.printName()
// 调用静态属性
// console.log(Person9.sex);


