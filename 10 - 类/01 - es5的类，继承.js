// es5
// 最简单的类
function Person() {
    this.name = "张三",
        this.age = 20
}

var p = new Person()
// console.log(p);

// 增加方法
function Person1() {
    this.name = "张三"
    this.age = 20

    this.run = function () {
        console.log(this.name + "在跑步");
    }
}
var p1 = new Person1()
// console.log(p1.run());
// 原型链扩展方法,实例共享
Person1.prototype.sex = '男';
Person1.prototype.work = function () {
    console.log(this.name + "在工作");
}
// p1.work()


// 添加静态方法
Person1.getInfo = function () {
    console.log("我是静态方法");
}

// 调用静态方法
// Person1.getInfo()


// 继承
// web类继承person类
// es5的继承，原型链加对象冒充的组合方式实现继承
/**
 * 对象冒充可以继承构造函数的属性和方法，但是不能继承原型链的属性方法
 */
function web() {
    // 对象冒充继承Person1
    Person1.call(this)
}

var w = new web()
// w.run()
// w.work() // 报错

/**
 * 原型链继承
 */
function Person2(name, age) {
    this.name = name
    this.age = age

    this.run = function () {
        console.log(this.name + "在跑步");
    }
}
Person2.prototype.work = function () {
    console.log(this.name + "在工作");
}
function web1(name, age) {
}

web1.prototype = new Person2("李四", 30)

var w1 = new web1("赵四", 30)
// w1.run()   //输出结果是李四，而没有变成赵四，所以通过原型链的方式实现继承时，我们无法向父类传参
// w1.work()   //输出结果是李四，而没有变成赵四，所以通过原型链的方式实现继承时，我们无法向父类传参


/**
 * 原型链加构造函数的组合继承模式
 */
function Person3(name, age) {
    this.name = name
    this.age = age

    this.run = function () {
        console.log(this.name + "在跑步");
    }
}
Person3.prototype.work = function () {
    console.log(this.name + "在工作");
}
function web2(name, age) {
    Person3.call(this, name, age)
}

// web2.prototype = new Person3("李四", 30)
web2.prototype = Person3.prototype

var w2 = new web2("赵四", 30)
w2.run()
w2.work()