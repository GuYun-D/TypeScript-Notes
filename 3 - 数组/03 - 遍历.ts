let numBox: number[] = [12, 20, 30, 40]
let sum: number = 0

for (let i: number = 0; i < numBox.length; i++) {
    sum += numBox[i]
}

console.log(sum);


let nums: number[] = [23, 0, 8, 78, 90, 6]
let max = nums[0]

for (let i: number = 1; i < nums.length; i++) {
    if (max < nums[i]) {
        max = nums[i]
    }
}

console.log(max);


let old: number[] = [1, 3, 23, 67, 43, 0, 34, 0, 3, 0]
let notZero: number[] = []
for (let i: number = 0; i < old.length; i++) {
    if(old[i] !== 0){
        notZero[notZero.length] = old[i]
    }
}

console.log(notZero);
