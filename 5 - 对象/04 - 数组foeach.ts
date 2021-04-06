let arr: string[] = ["a", "b", "c"]

/**
 * 传值不用做类型注解， 数组是什么类型的，item就是什么类型的
 * 刻意省略index， 不能省略item直接用index
 */
// 模拟foeach的方法声明
// Array.prototype.foreach1 =  function forreach1(callbackfn: (value: boolean, index: number) => void) {}

// arr.forEach1(function (item, index) { 
// })

let nums: number[] = [1,2,3,4]
nums.forEach(function (item, index) {})