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
                if(count % 3 === 0 && count % 5 === 0){
                    elPara.innerHTML = elPara.innerHTML + "<span class= \"fizz\">Fizz</span><span class=\"buzz\">Buzz</span> ";
                    count ++;
                } else if(count % 3 === 0){
                    elPara.innerHTML = elPara.innerHTML + "<span class= \"fizz\">Fizz</span> ";
                    count ++;
                } else if (count % 5 === 0){
                    elPara.innerHTML = elPara.innerHTML + "<span class=\"buzz\">Buzz</span> ";
                    count ++;
                } else {
                    elPara.innerHTML = elPara.innerHTML + count + " ";
                    count ++;
                }                    
            } else {
                clearInterval(intervalId);
            }
        } , 150);
}
