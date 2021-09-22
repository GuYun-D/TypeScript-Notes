/**
 * 一个参数是一个可选类型的时候，它实际上是这个参数和undefined的联合类型 
 */
function foo(message?: string){
  console.log(message);
}

foo()