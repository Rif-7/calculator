let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

let currentResult = null;
let currentNumber = "";
let operator = "";

function operate(a, b, operator) {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = sub(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
}


function fillDisplay(e) {
    const display = document.querySelector(".text-content");
    display.textContent += e.target.textContent;
}

function updateCurrentNum(e) {
    currentNumber += e.target.getAttribute("data-value");
    console.log(currentNumber);
}

function doMath(e) {
    if (currentResult === null ) {
        currentResult = Number(currentNumber);
        currentNumber = "";
        
        
    } else {
        currentResult = operate(currentResult, Number(currentNumber), operator);
        currentNumber = "";
        console.log(currentResult);
    }
    const display1 = document.querySelector(".text-content");
    display1.textContent += e.target.textContent;
    operator = e.target.getAttribute("data-value");
    document.querySelector(".result").textContent = currentResult;
    return;
}




const buttons = document.querySelectorAll(".key");
buttons.forEach((button) => {
    button.addEventListener("click", updateCurrentNum);
    button.addEventListener("click", fillDisplay);
})

const funcKeys = document.querySelectorAll(".func");
funcKeys.forEach((funcKey) => {
    funcKey.addEventListener("click", doMath);
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    document.querySelector(".text-content").innerHTML = "";
    currentResult = null;
})

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    let finalResult = operate(currentResult, currentNumber, operator);
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = finalResult;
    currentNumber = Number(finalResult);
    currentResult = null;
})