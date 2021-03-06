/**
 * 装饰器是一种特殊类型的声明方式，他能够被附加到类声明，方法，属性或者参数上，可以修改类的行为
 * 通俗的讲，装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能
 * 常见的装饰器：类装饰器，方法装饰器，方法装饰器，参数装饰器
 * 装饰器的写法：普通装饰器（无法传参），装饰器工厂（可传参）
 * 
 */

/**
 * 装饰器的执行顺序
 * 属性->方法->类
 * 如果有多个同类型装饰器，先执行后面的
 */