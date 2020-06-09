var provinceData = [
    '请输入省份', '北京', '山东', '山西'
];
var cityData = [
    ['请输入省份'],
    ['朝阳', '东城'],
    ['济南', '青岛'],
    ['太原', '平遥']
];

function init() {
    var province = document.getElementById("province");
    //console.log(province.options.length);
    province.options.length = provinceData.length;
    for (var i in provinceData) {
        province.options[i].text = provinceData[i];
    }
}

function provinceChange() {
    var province = document.getElementById("province");
    var city = document.getElementById("city");
    //alert(province.selectedIndex)
    var x = cityData[province.selectedIndex];
    city.options.length = x.length;
    for (var j in x) {
        city.options[j].text = x[j];
    }
}
/*
var provinces = [{
        name: "辽宁",
        city: ["沈阳", "抚顺"]
    },
    {
        name: "黑龙江",
        city: ["哈尔滨", "齐齐哈尔"]
    }
]
for (let i in provinces) {
    var my_option = document.createElement("option");
    my_option.innerText = provinces[i]["name"];
    my_option.value = i;

    for (let j in provinces[0]["city"]) {
        var my_option = document.createElement("option");
        my_option.innerText = provinces[0]["name"];
        my_option.value = j;

        var sel = document.getElementById('s1');
        sel.appendChild(my_option);
    }

    var sel = document.getElementById('s1');
    sel.appendChild(my_option);

    // let ele = document.createElement("h1");
    // ele.innerText = "hello";
    // document.body.appendChild(ele);
} 
*/