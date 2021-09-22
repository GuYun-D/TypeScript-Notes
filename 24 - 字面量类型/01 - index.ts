/**
 * 字面量类型，使用const定义
 */
const message: string = "哈哈哈"
// 类型就不对了
// message = "hufeur"

// 类型和值必须保持一致
const num: 123 = 123

// 字面量的意义,和联合类型结合
type Alignment = "left" | "right" | "center"
let align: Alignment = "left"

// 这样就不报错了，相当于是在一给定的范围内赋值
align = "right"