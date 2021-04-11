/**
 * 模块
 * 我么们可以把一些公共的功能抽离成一个单独的文件作为一个模块
 * 模块里的变量，函数，类等都是私有的，如果我们要在外部进行访问，就需要使用export将他们暴漏出去
 * 通过import进行引入
 */

import { save as a } from "./modules/db"

// default方式引入
import getData from "./modules/db"

getData()
a()