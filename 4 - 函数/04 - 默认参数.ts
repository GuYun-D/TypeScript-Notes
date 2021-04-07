/**
 * 默认参数必须写在最后
 */

function info1(name: string, age: number = 18) {
    if(age){
        console.log(name + age);
    }else{
        console.log(name + "------年龄保密" );
        
    }
}

info1("西施")


function info2(age: number = 18,name: string) {
    if(age){
        console.log(name + age);
    }else{
        console.log(name + "------年龄保密" );
        
    }
}

info2(14,"西施")