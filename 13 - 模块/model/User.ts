import { MysqlDb } from "../modules/db1"

// 操作用户表，定义user类映射数据表
class User {
    public username: string | undefined
    public password: number | undefined
}

let UserModel = new MysqlDb<User>()

export {
    User,
    UserModel
}