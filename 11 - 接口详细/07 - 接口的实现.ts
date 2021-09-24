interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 对象
const a: ISwim = {
  swimming() {

  }
}

// 函数传参
function foo(swim: ISwim) {

}

// 类实现接口,继承只能一个，接口可以实现多个
class Animal {
  constructor() {

  }
}

class Fish extends Animal implements ISwim, IEat {
  eating() {
    console.log("吃东西");

  };
  swimming() {
    console.log("游泳");

  };
}

// 编写公共的API：面向接口编程
