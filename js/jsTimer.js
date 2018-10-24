'use strict';
let nowDate = new Date();
function consoleDate(date) {
    let h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    if ( h < 10){
        h = '0' + h;
    }
    if (m < 10){
        m = '0' + m;
    }
    if ( s < 10 ){
        s = '0' + s;
    }
    console.log(h + ':' + m + ':' + s);

}
consoleDate(nowDate);