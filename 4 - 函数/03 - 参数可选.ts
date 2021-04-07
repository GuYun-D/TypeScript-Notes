/**
 *  在参数后面加上一个问好，就能实现
 */

function info(name: string, age?: number) {
    if(age){
        console.log(name + age);
    }else{
        console.log(name + "------年龄保密" );
        
    }
}

info("西施")