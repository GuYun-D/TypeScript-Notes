// 1
const el = document.getElementById("yun") as HTMLImageElement

el.src = ""


// 2
class Person {
  
}

class  student extends  Person{
  studying(){

  }
}

function sayHello(p: Person){
  (p as student).studying()
}

const stu = new student()
sayHello(stu)


// 3
const message:string = "gagaga"
const num : number = (message as unknown) as number