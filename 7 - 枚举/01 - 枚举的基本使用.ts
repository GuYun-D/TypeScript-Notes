/**
 * 枚举是组织有关联数据的一种方式（比如，x 和 o 就是有关联的数据）。
 * 使用场景：当变量的值，只能是几个固定值中的一个，应该使用枚举来实现。
 * 注意：JS 中没有枚举，这是 TS 为了弥补 JS 自身不足而新增的。
 * 枚举是只读的，不可修改
 */

// 创建枚举
enum Gender { Female, Male }
enum Players { x, o }
// 创建变量，并赋类型为枚举
let userGender: Gender
// 访问枚举的成员 
userGender = Gender.Female
/**
 * 枚举成员的值，从0开始自增
 * 枚举成员的值为数字，称为数字枚举
 */
console.log(userGender); // 0
/**
 * 枚举值可控
 */
enum box { a = 1, c = 8 }

// 枚举的类型
let d: Gender = Gender.Female



/**
 * 字符串枚举
 * 每一个成员都必须赋值，没有值自增行为
 */

enum users {female = '女', male = "男"}