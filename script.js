"use strict"

let elPara = document.getElementById("el-paragraph");

function generate(){
    let count = 0;
    elPara.innerHTML = "";
    let intervalId = setInterval(() =>{
        if (count < 10){
            elPara.innerHTML = elPara.innerHTML + count + "<br>";
            count ++;
        } else {
            clearInterval(intervalId);
        }
    } , 250);
}