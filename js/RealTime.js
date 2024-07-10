function updateTime_1(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var seconde = now.getSeconds();
    var day = now.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var week = weeks[day];
    var time = year + "年" + month + "月" + date + "日" + "&nbsp"
    + week + "&nbsp" + hour + ":" + minute + ":" + seconde;
    return time;
}

function updateTime_2(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var seconde = now.getSeconds();
    var time = year + "." + month + "." + date +"  "+ hour + ":" + minute + ":" + seconde;
    return time;
}
