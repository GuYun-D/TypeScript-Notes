var dburl = "xxxxxx"

function getData(): any {
    console.log("获取数据库的数据");
    return [
        {
            title: "xxxxxxxxxxx"
        },

        {
            title: "xxxxxxxxxxxxxxxxxxxxx"
        }
    ]

}


export function save() {
    console.log("保存数据成功");
}

// 统一暴漏
// export {
//     dburl,
//     getData,
//     save
// }

// 默认暴漏，只能用一次
export default getData

