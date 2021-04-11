import {UserModel, User} from "./model/User"

let user = new User()
user.username = "张三"
user.password = 123
UserModel.add(user)