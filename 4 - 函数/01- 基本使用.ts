function getSum(nums: number[]) {
    let notZero: number[] = []
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            notZero[notZero.length] = nums[i]
        }
    }
    console.log(notZero);

}

let fnNum: number[] = [1, 3, 23, 67, 43, 0, 34, 0, 3, 0]

getSum(fnNum)


let num1: number = 200
let num2: number = 400

function add(number1: number, number2: number) {
    return number1 + number2
}

let added = add(num1, num2)

console.log(add(30, 2) + add(3, 9) + "函数返回值")

console.log(added);


function printInfo(name: string, age: number) {
    console.log(name + "|" + age);
}

printInfo("代文辉", 22)

/**
 * 匿名函数可以不写类型
 * 它可以自动推断出类型
 */

const arr: number[] = [1, 2, 3, 4, 5]
arr.forEach(item => {
    console.log(item)
})

/**
 * 对象类型参数
 */
function printPoint(point: { x: number, y: number }): string {
    return `x: ${point.x}, y: ${point.y}`
}