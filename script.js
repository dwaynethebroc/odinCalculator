let calcDisplayText = "";

let calcButtons = document.querySelectorAll(".button");
let display = document.querySelector(".display")
let operators = document.querySelectorAll(".operator");
let equalSign = document. querySelector(".equal");
let clearButton = document.querySelector(".clear");
let backspaceButton = document.querySelector(".backspace")

const calculator = {
    add: function addition(a, b){
        return a + b;
    },

    subtract: function subtraction(a, b){
        return a - b;
    },

    multiply: function multiplication(a, b){
        return a * b;
    }, 

    divide: function division(a, b){
        return a / b;
    },
}

function operate(a, b, c){
    let firstNumber = a;
    let operator = b;
    let secondNumber = c; 

    if (operator === "+"){
        console.log(calculator.add(firstNumber, secondNumber));
        return calculator.add(firstNumber, secondNumber);
    }
    else if(operator === "-"){
        console.log(calculator.subtract(firstNumber, secondNumber));
        return calculator.subtract(firstNumber, secondNumber);
    }
    else if(operator === "*"){
        console.log(calculator.multiply(firstNumber, secondNumber));
        return calculator.multiply(firstNumber, secondNumber);
    }
    else if(operator === "/"){
        console.log(calculator.divide(firstNumber, secondNumber));
        return calculator.divide(firstNumber, secondNumber);
    }
}

function solveForDisplay() {
    
    const array = calcDisplayText.split(' ', 3);
    let firstNumber = Number(array[0]);
    let operator = array[1];
    let secondNumber = Number(array[2]);

    let solved = operate(firstNumber, operator, secondNumber);
    return solved;
}

calcButtons.forEach(button => button.addEventListener('click', event => {
    calcDisplayText += `${button.id}`;
    display.innerText = calcDisplayText; 
 }))

operators.forEach(operator => operator.addEventListener('click', event => {
    
    if (/\s/.test(calcDisplayText)){
        let array = calcDisplayText.split(' ');

        if (array.length === 3){
            calcDisplayText = solveForDisplay();
            calcDisplayText += ` ${operator.id} `
            display.innerText = calcDisplayText;
            array.length = 0;
        }
        else if (array.length < 3){
            calcDisplayText += ` ${operator.id} `;
            display.innerText = calcDisplayText;
            array.length = 0;
        }
    }
    else {
        calcDisplayText += ` ${operator.id} `;
        display.innerText = calcDisplayText;
    }
    
 }))

backspaceButton.addEventListener('click', event => {
    let backspaceCalc = calcDisplayText.slice(0, -1);

    calcDisplayText = backspaceCalc;
    display.innerText = calcDisplayText; 
 })

clearButton.addEventListener('click', event => {
    calcDisplayText = ``;
    display.innerText = ""; 
 })

equalSign.addEventListener('click', event => {
    calcDisplayText = solveForDisplay();
    display.innerText = calcDisplayText;
 })



