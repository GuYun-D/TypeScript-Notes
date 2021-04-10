interface FullName1 {
    firstName: string;
    /**
     * 添加问号，可传可不传
     */
    secondName?: string
}

function printName1(name: FullName1) {
    console.log(name);

}

printName1({
    firstName: "我日"
})


/***
 * 模拟jq的ajax
 */

interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string
}

function myAjax(config: Config) {
    var xhr = new XMLHttpRequest()
    xhr.open(config.type, config.url, true)
    xhr.send(config.data)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("成功");
        }
    }
}

myAjax({
    type: 'get',
    url: 'http://wwww.baidu1.com',
    dataType: "json"
})