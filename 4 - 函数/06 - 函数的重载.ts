/**
 * 仿重载
 */

// es5直接后面覆盖前面
// function reWrite(config: any): any {}
// function reWrite(config: any, value: string): any {}

// ts中的重载
function reWrite(name: string): string;
function reWrite(age: number): number;
function reWrite(str: any): any {
    if (typeof str === "string") {
        return '我叫' + str
    } else {
        return '我今年' + str + "岁"
    }
}

console.log(reWrite('14'));


function getIF(name: string): string;
function getIF(name: string, age: number): string;
function getIF(name: any, age?: any): string {
    if (age) {
        return "我叫" + name + "今年" + age + "岁"
    } else {
        return "我叫" + name
    }
}

console.log(getIF("回", 123));


