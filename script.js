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
                let output = "";       
                if (count % 3 === 0) output += "<span class= \"fizz\">Fizz</span>";
                if (count % 5 === 0) output += "<span class=\"buzz\">Buzz</span>";
                elPara.innerHTML += (output || count) + " ";
                count ++;
            } else {
                clearInterval(intervalId);
            }
        } , 150);
}

