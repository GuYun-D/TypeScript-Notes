let num: number[] = [1, 21, 34, 21, 4, 6]

/**
 * foreach循环全部， 中间不能停止
 * some：遍历数组， 查找是否有一个满足条件， 返回true停止循环
 */

let result2: boolean = num.some(function (item, inde) {
    console.log(item);
    if (item > 10) {
        return true
    }

    return false
})

console.log(result2);
