"use strict"

let elPara = document.getElementById("el-paragraph");
let numberInput = document.getElementById("number-input");

function generate(){
    let count = 1;
    elPara.innerHTML = "";
    let intervalId = setInterval(() =>{
        if (count <= numberInput.value){
            elPara.innerHTML = elPara.innerHTML + count + "<br>";
            count ++;
        } else {
            clearInterval(intervalId);
        }
    } , 150);
}