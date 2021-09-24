class Person {
  readonly name: string

  /**
   * 只读属性是可以在构造器中赋值的，赋值之后不能再修改了
   */
  constructor(name: string) {
    this.name = name
  }
}

const p = new Person("万民庆")
console.log(p.name);
// p.name = 12
