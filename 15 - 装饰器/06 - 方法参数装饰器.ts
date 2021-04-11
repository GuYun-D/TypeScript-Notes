/**
 * 方法参数装饰器
 * 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据
 * 三个参数
 * 1。1.对于静态成员来说是类的构造函数，对于实例成员来说是原型对象
 * 2.方法的名字
 * 3.参数在函数参数列表中的索引
 */

function logParamS(params: any) {
    return function (target: any, methodsName: any, paramsIndex: any) {
        // console.log(target);
        // console.log(methodsName);
        // console.log(paramsIndex);

        this.apiurl = params
    }
}

class param {
    public url: string | undefined
    constructor() {

    }

    getData(@logParamS('xxxxxxx') uuid: any) {
        console.log("我是原型中的getData");
        console.log(uuid)
    }
}

let p: any = new param()
console.log(p.apiurl);
