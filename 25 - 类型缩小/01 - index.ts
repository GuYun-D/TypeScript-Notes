/**
 * 通过类似typeof padding === "number" 的判断语句，来改变ts的执行路径
 * ，在指定的执行路径中，可以缩小比声明时更小的类型，叫做类型缩小
 * 而typeof padding === "number"可以称之为类型保护 
 * 
 * 常见的类型保护：
 *  typeof
 *  平等缩小：（如：===， ！==）
 *  instanceof
 *  in  
 *  。。。。
 */


/**
 * typeof: 检擦返回的值typeof是一种类型保护，因为ts对如何typeof操作不同的值进行编码
 * 这个函数的的过程叫做
 */
type IdType = number | string
function printId(id: IdType) {
  // 这一步叫做类型缩小，即将一个联合类型缩小成number类型或者string类型
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

/**
 * 平等类型缩小
 * == | === | ！== | ！= | switch
 */
type Direction = "left" | "right" | "top" | "bottom"
function printDirection(direction: Direction) {
  if (direction === "left") {
    console.log(direction);
  }
}

/**
 * instanceof
 */
function printTime(time: string | Date) {
  // 判断某个对象是不是某个实例的时候
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time);

  }
}

class Student {
  studying() { }
}

class Teacher {
  teaching() { }
}

function work(p: Student | Teacher) {
  if (p instanceof Teacher) {
    p.teaching()
  } else {
    p.studying()
  }
}

const stu = new Student()
work(stu)

/**
 * in
 */
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if('swimming' in animal){
    animal.swimming()
  }else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming");
  }
}

walk(fish)