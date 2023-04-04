"use strict"

let elPara = document.getElementById("el-paragraph");
let numberInput = document.getElementById("number-input");
let intervalId;

function generate(){
    if (intervalId){
        clearInterval(intervalId);
    }
    let finalNumber = numberInput.value;
    let count = 1;
    elPara.innerHTML = "";
        intervalId = setInterval(() =>{
            if (count <= finalNumber){
                elPara.innerHTML = elPara.innerHTML + count + " ";
                count ++;
            } else {
                clearInterval(intervalId);
            }
        } , 150);
}
