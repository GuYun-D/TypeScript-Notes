/**
 * 方法装饰器
 * 应用到方法的属性描述符上，可以用来监视，修改或者替换方法的定义，三个参数
 * 1.对于静态成员来说是类的构造函数，对于实例成员来说是原型对象
 * 2.成员的名字
 * 3.成员的属性描述符
 */

// 方法装饰器一
function logMethod(params: any) {
    return function (target: any, methodName: any, des: any) {
        /**
         * target: 原型对象
         * methodName：方法名称
         * des：描述符
         */
        console.log(target);
        console.log(methodName);
        console.log(des);

        target.url = "http://www.url.com"
        target.run = function () {
            console.log("我在跑步");
        }

    }
}

class met {
    public url: string | undefined
    constructor() {

    }

    @logMethod("xxxxxxxxxxxx")
    getData() {
        console.log(this.url);
    }
}

let m: any = new met()


console.log(m.url);
console.log(m.run());


// 方法装饰器二
function logMet1hod1(params: any) {
    return function (target: any, methodName: any, des: any) {
        /**
         * target: 原型对象
         * methodName：方法名称
         * des：描述符
         */
        console.log(target);
        console.log(methodName);
        console.log(des);
        // 修改方法-------------des.value就是getData方法
        /**
         * 把装饰器的方法里面传入的所有参数改为string，直接替换
         */
        /* 
            console.log(des.value);
            let oMethod = des.value
            des.value = function (...args: any[]) {
                args = args.map((value) => {
                    return String(value)
                })
                console.log(args);
            }
        */
        /**
         * 不替换方法，保存元对象上的方法
         */
        console.log(des.value);
        let oMethod = des.value
        des.value = function (...args: any[]) {
            args = args.map((value) => {
                return String(value)
            })
            console.log(args);

            // 使用对象冒充
            oMethod.apply(this, args)
        }
    }
}

class met1 {
    public url: string | undefined
    constructor() {

    }

    @logMet1hod1("xxxxxxxxxxxx")
    getData(...args: any[]) {
        console.log(args);
        
        console.log("我是原型方法");
    }
}

let m1: any = new met1()
console.log(m1.getData(124, "2345", true));
