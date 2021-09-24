class Person {
  name: String = "123"
  eating(){

  }
}

// const p = new Person()

const p: Person = {
  name: "1234",
  eating(){
    console.log("哈哈");
    
  }
}


// 用处
function printPerson(p: Person){
  console.log(p.name);
}

printPerson(new Person())
// 或者
printPerson({
  name: "哈哈哈",
  eating(){
    console.log("fdy");
    
  }
})