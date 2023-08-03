let calcDisplayText = "";
let solvedAnswer = "";

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

console.log(calculator.add(2,3))
console.log(calculator.subtract(2,3))
console.log(calculator.multiply(2,3))
console.log(calculator.divide(2,3))

function operate(a, b, c){
    let firstNumber = a;
    let operator = b;
    let secondNumber = c; 

    if (operator === "+"){
        calculator.add(firstNumber, secondNumber);
        console.log(calculator.add(firstNumber, secondNumber));
    }
    else if(operator === "-"){
        calculator.subtract(firstNumber, secondNumber);
        console.log(calculator.subtract(firstNumber, secondNumber));
    }
    else if(operator === "*"){
        calculator.multiply(firstNumber, secondNumber);
        console.log(calculator.multiply(firstNumber, secondNumber));
    }
    else if(operator === "/"){
        calculator.divide(firstNumber, secondNumber);
        console.log(calculator.divide(firstNumber, secondNumber));
    }
}

operate(4, "+", 6);
operate(4, "-", 6);
operate(4, "*", 6);
operate(4, "/", 6);

let calcButtons = document.querySelectorAll(".button");
let display = document.querySelector(".display")
let operators = document.querySelectorAll(".operator");
let equalSign = document. querySelector(".equal");

calcButtons.forEach(button => button.addEventListener('click', event => {
    calcDisplayText += `${button.id}`;
    display.innerText = calcDisplayText; 
 }))

operators.forEach(operator => operator.addEventListener('click', event => {
    calcDisplayText += ` ${operator.id} `;
    display.innerText = calcDisplayText;
 }))

equalSign.forEach(equals => equals.addEventListener('click', event => {
    //solvedAnswer = Function for solivng equation goes here
    display.innerText = solvedAnswer;
 }))
    
