let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //Store all components on HTML in our JS

    let clear = document.querySelector(".btn.clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let opertators = document.querySelectorAll(".operator");

    let previousNumber = document.querySelector(".previous");
    let currentNumber = document.querySelector(".current");

    //Functionality for on-screen buttons
    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentNumber.textContent = currentValue;
    }))

    opertators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousNumber.textContent = previousValue + " " + operator;
        currentNumber.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousNumber.textContent = currentValue;
        currentNumber.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        calculate();
        previousNumber.textContent = '';
        currentNumber.textContent = previousValue;
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })

    //functionality for keyboard keys
    document.addEventListener("keydown", function(e){
        if(!isNaN(e.key)) {
            handleNumber(e.key)
            console.log(e.key)
            currentNumber.textContent = currentValue;
        } else if (e.key === "+" || e.key === "X" || e.key === "x" || e.key === "-" || e.key === "/") {
            handleOperator(e.key)
            previousNumber.textContent = previousValue + " " + operator;
            currentNumber.textContent = currentValue;
        } else if (e.key === "Enter") {
            calculate()
            previousNumber.textContent = '';
            currentNumber.textContent = previousValue;
        } else if (e.key === "Delete") {
            previousValue = '';
            currentValue = '';
            operator = '';
            previousNumber.textContent = currentValue;
            currentNumber.textContent = currentValue;
        } else if (e.key === ".") {
            addDecimal();
        }
    });

});

function handleNumber(num) {
    if(currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+") {
        previousValue += currentValue;
    } else if(operator === "-") {
        previousValue -= currentValue;
    } else if(operator === "X") {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
        
    console.log(previousValue);
}

function addDecimal() {
    if(!currentValue.includes(".")) {
        currentValue += '.';
    }
}