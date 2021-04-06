/**
 * 指定返回值，的形式
 */
function fn(): number {
    return 1
}

let result = fn()

console.log(result);


function fn1(p1: number, p2: number): number {
    return p1 + p2
}

let result1 = fn1(2, 7)
console.log(result1);

console.log(2 * fn1(2, 8));

function fn2(n: number): void {
    if (n === 20) {
        console.log("开始执行");
        return;
        console.log("执行完毕");

    }
}

fn2(2)
fn2(20)