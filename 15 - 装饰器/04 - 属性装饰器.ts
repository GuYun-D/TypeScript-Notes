/**
 * 属性装饰器表达式会在运行时当作函数被调用，传入两个参数
 * 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 2.成员的名字
 */

// 类装饰器
function logClassD(params: any) {
    return function (target: any) {
        console.log(target);
        console.log(params);

    }
}

// 属性装饰器
function logPrototy(params: any) {
    return function (target: any, attr: any) {
        console.log(target);   // 原型对象
        console.log(attr);  // 传进来的值

        target[attr] = params
    }
}

@logClassD('xxxxxxxx')
class httpclient {

    @logPrototy("http://www.com.com")
    public url: any | undefined
    constructor() {

    }

    getData() {
        console.log(this.url);
        
    }
}

let http12 = new httpclient()
http12.getData()