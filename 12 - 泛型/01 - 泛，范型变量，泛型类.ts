/**
 * 泛型：软件工程中，我们不仅要创建一致良好的Api，
 *       同时也要考虑可重用性，组件不仅能够支持当前的数据类型，
 *       同时也要支持未来的数据类型
 * 通俗理解：泛型就是解决类，接口，方法的复用性，以及对不特定数据类型的支持
 *
 */

// 如果使用any这样就相当于放弃了类型检查
// function fn(name:any) : any {

// }

// 泛型，可以支持不特定的数据类型，传入的参数和返回的参数类型一致
// function fn<T>(value: T): T {
//     return value
// }

// fn<number>(123)
// fn<string>('123')

// function fn1<T>(value: T): any {
//     return value
// }


// 泛型类
// 最小堆算法,
class MinClass {
    public list: number[] = []
    add(num: number) {
        this.list.push(num)
    }

    min(): number {
        var minNumber = this.list[0]

        for (let i = 0; i < this.list.length; i++) {
            if (minNumber > this.list[i]) {
                minNumber = this.list[i]
            }
        }

        return minNumber
    }
}

let m = new MinClass();

m.add(3)
m.add(36)
m.add(4)
m.add(9)
m.add(25)
m.add(0)
m.add(5)

console.log(m.min());

// 上面只能传入数字，使用泛型
class MinClass1<T>{
    public list: T[] = []

    add(value: T): void {
        this.list.push(value)
    }

    min(): T {
        var minNumber = this.list[0]

        for (let i = 0; i < this.list.length; i++) {
            if (minNumber > this.list[i]) {
                minNumber = this.list[i]
            }
        }

        return minNumber
    }
}

let m1 = new MinClass1<number>();

m1.add(12)
m1.add(112)
m1.add(142)
m1.add(2)

console.log(m1.min());

let m2 = new MinClass1<string>();

m2.add('a')
m2.add('b')
m2.add('c')
m2.add('d')

console.log(m2.min());