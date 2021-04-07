// function sum(...result: number[]): number {
//     let sum = 0
//     for (let i = 0; i < result.length; i++) {
//         sum += result[i]
//     }

//     return sum
// }

// console.log(sum(1, 2, 3, 4));

function sum(x:number, y:number, ...result: number[]): number {
    let sum = 0
    for (let i = 0; i < result.length; i++) {
        sum += result[i]
    }

    return sum + x + y
}

console.log(sum(1, 2, 3, 4));
