/**
 * 定义一个操作数据库的库，支持mysql，mongoDb mmsql
 * 功能：都有add, updata, delete, get不同
 */

interface DB<T> {
    add(info: T): boolean;
    updata(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

// 定义操作mysql的方法
class MysqlDb<T> implements DB<T> {
    add(info: T): boolean {
        console.log(info);
        return true
    }
    updata(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        let list = [
            {
                title: 'xxx',
                desc: "xxxxxxxxxxxx"
            },

            {
                title: 'xxx',
                desc: "xxxxxxxxxxxx"
            }
        ]

        return list
    }
}

// 定义操作mmsql的方法
class MmsqlDb<T> implements DB<T> {
    add(info: T): boolean {
        console.log(info);
        return true
    }
    updata(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        let list = [
            {
                title: 'xxx',
                desc: "xxxxxxxxxxxx"
            },

            {
                title: 'xxx',
                desc: "xxxxxxxxxxxx"
            }
        ]

        return list
    }
}

// 操作用户表，定义user类映射数据表
class User {
    public username: string | undefined
    public password: number | undefined
}

let u = new User()
u.username = '万民庆'
u.password = 1234

// let mySql = new MysqlDb<User>()

// mySql.add(u)

let mmSql = new MmsqlDb<User>()

mmSql.add(u)

console.log(mmSql.get(4));

