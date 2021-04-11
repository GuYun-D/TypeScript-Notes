/**
 * 类装饰器：类装饰器在类声明之前被声明（紧靠类），
 *          应用于类构造函数，可以用来监视，修改或者替换类定义，传入一个参数
 */

// 声明装饰器
// 普通装饰器
function logClass(parmas) {
    console.log(parmas);
    // param就是当前类
    parmas.prototype.apiUrl = "动态扩展的属性"
    parmas.prototype.run = function () {
        console.log("run方法");

    }
}

@logClass
class HttpClient {
    constructor() {

    }

    getData() {

    }
}

// 此处的any？
var http: any = new HttpClient()

console.log(http.run());

// 装饰器工厂
function logClass1(params: string) {
    return function (target: any) {
        console.log(target);
        console.log(params);
        target.prototype.api = params
    }
}

@logClass1("http://gyes.com")
class HttpClient1 {
    constructor() {

    }
    getData() {

    }
}

let http2:any = new HttpClient1()
console.log(http2.api);
