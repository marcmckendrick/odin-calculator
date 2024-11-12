let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //Store all components on HTML in our JS

    let clear = document.querySelector("#clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let opertators = document.querySelectorAll(".operator");

    let previousNumber = document.querySelector(".previous");
    let currentNumber = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
    }))
})

function handleNumber(num) {
    console.log(num);
}