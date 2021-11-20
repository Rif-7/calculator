let add = (a, b) => Number(a) + Number(b);
let sub = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;
let mod = (a, b) => a % b;

let currentResult = null;
let currentNumber = "";
let operator = "";
let equalled = false;

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
        case "%":
            result = mod(a, b);
            break;
    }
    return result.toFixed(2);
}


function fillDisplay(e) {
    let text  = e.target.textContent;
    const display = document.querySelector(".text-content");
    if (equalled) {
        display.innerHTML = "";
        document.querySelector(".result").innerHTML = "";
        equalled = false;
    }
    display.textContent += text;
}

function updateCurrentNum(e) {
    currentNumber += e.target.getAttribute("data-value");
}

function doMath(e) {
    decimalBtn.disabled = false;
    if (currentResult === null ) {
        currentResult = Number(currentNumber);
        currentNumber = "";
        
        
    } else {
        currentResult = operate(currentResult, Number(currentNumber), operator);
        currentNumber = "";
    }
    const display1 = document.querySelector(".text-content");
    display1.textContent += e.target.textContent;
    operator = e.target.getAttribute("data-value");
    document.querySelector(".result").textContent = currentResult;
    return;
}

function backSpace() {
    if (currentNumber === "") {
        return;
    }
    displayText = document.querySelector(".text-content");
    currentNumber = currentNumber.slice(0, -1);
    displayText.textContent = displayText.textContent.slice(0, -1);
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
    funcKey.addEventListener("click", () => {
        document.querySelector(".result").innerHTML = "";
        if (equalled) {
            document.querySelector(".text-content").innerHTML = "";
            equalled = false;
        }
    })
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    document.querySelector(".text-content").innerHTML = "";
    document.querySelector(".result").innerHTML = "";
    currentResult = null;
    currentNumber = "";
})

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    let finalResult = operate(currentResult, currentNumber, operator);
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = finalResult;

    currentNumber = Number(finalResult);
    currentResult = null;
    decimalBtn.disabled = false;
    equalled = true;

})

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
    decimalBtn.disabled = true;
})

const backSpaceBtn = document.querySelector(".backspace");
backSpaceBtn.addEventListener("click", backSpace);