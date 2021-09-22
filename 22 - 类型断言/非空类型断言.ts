function logMes(message?: string){
  console.log(message!.length);
}

logMes("gagagaqwer")
/**
 * 使用可省略的话，上面的代码是不严谨的，因为不传参的话相当于是传了一个undefined，
 * 没有length的属性
 * 非空类型断言
 * console.log(message!.length);
 * 我们确定message是有值的，跳过ts对他的检测
 * 
 */
// logMes()