class Person {
  // 有一个规范，私有属性下划线开头
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  set name(newName) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

const p = new Person("万民庆")
console.log(p.name);
p.name = "谢超"
console.log(p.name);

