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
export class MysqlDb<T> implements DB<T> {
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
export class MmsqlDb<T> implements DB<T> {
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


