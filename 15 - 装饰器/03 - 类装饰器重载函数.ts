/**
 * 重载构造函数的例子
 * 类装饰器表达式会在运行时当作函数调用，类的构造函数作为其唯一的参数
 * 如果装饰器返回一个值，他会使用提供的构造函数来替代类的声明
 */
function logClass3(target: any) {
    console.log(target);
    return class extends target {
        // 所有都要重载，不然报错
        apiUrl: any = '我是target，被修改了'
        getData() {
            this.apiUrl = this.apiUrl + "------------"
            console.log(this.apiUrl);

        }
    }

}

@logClass3
class httpClient3 {
    public apiUrl: string | undefined
    constructor() {
        this.apiUrl = "我是构造函数里面的apiUrl"
    }

    getData() {
        console.log(this.apiUrl);

    }
}

let http1 = new httpClient3()

http1.getData()