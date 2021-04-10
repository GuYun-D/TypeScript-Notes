/**
 * 把类当作参数的泛型类
 */

/**
 * 定义一个user类，用来映射数据库字段
 * 定义一个mysqldb的类用于操作数据库
 * 然后把user类当作参数传递到mysqldb中
 */

// class User {
//     public username: string | undefined;
//     public password: string | undefined;
// }

// // 文章分类
// class ArticlleCate {
//     public title: string | undefined;
//     public desc: string | undefined;
//     public status: number | undefined
// }

// class mysqldb {
//     add(info: ArticlleCate): boolean {
//         console.log(info);

//         return true
//     }
// }

// class mysqldb {
//     add(user: User): boolean {
//         console.log(user);

//         return true
//     }
// }

// let u = new User()
// u.username = "大地"
// u.password = '123456'

// let a = new ArticlleCate()
// a.title = "数据库操作"
// a.status = 0
// a.desc = '没有'

// let Db = new mysqldb()
// Db.add(a)
// Db.add(u)

// 封装mysqlDb,操作数据库的泛型类
class mysqlDb<T>{
    add(info: T): boolean {
        console.log(info);

        return true
    }
}

class User {
    public username: string | undefined;
    public password: string | undefined;
}
let u = new User()
u.username = "大地"
u.password = '123456'

let Db = new mysqlDb<User>()
console.log(Db.add(u));

class ArticlleCate {
    public title: string | undefined;
    public desc: string | undefined;
    public status: number | undefined

    constructor(params: {
        title: string | undefined,
        desc: string | undefined,
        status: number | undefined
    }) {
        this.title = params.title
        this.desc = params.desc
        this.status = params.status
    }
}

let a = new ArticlleCate({
    title: "数据库操作",
    status: 0,
    desc: '没有'
})

let Db1 = new mysqlDb<ArticlleCate>()

Db1.add(a)
