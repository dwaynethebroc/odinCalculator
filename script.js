let calcDisplayText = "";

let calcButtons = document.querySelectorAll(".button");
let display = document.querySelector(".display")
let operators = document.querySelectorAll(".operator");
let equalSign = document. querySelector(".equal");
let clearButton = document.querySelector(".clear");
let backspaceButton = document.querySelector(".backspace");
let periodButton = document.querySelector(".period");

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
        return parseFloat(calculator.add(firstNumber, secondNumber).toFixed(15));
    }
    else if(operator === "-"){
        console.log(calculator.subtract(firstNumber, secondNumber));
        return parseFloat(calculator.subtract(firstNumber, secondNumber).toFixed(15));
    }
    else if(operator === "*"){
        console.log(calculator.multiply(firstNumber, secondNumber));
        return parseFloat(calculator.multiply(firstNumber, secondNumber).toFixed(15));
    }
    else if(operator === "/"){
        console.log(calculator.divide(firstNumber, secondNumber));
        return parseFloat(calculator.divide(firstNumber, secondNumber).toFixed(15));
    }
}

function solveForDisplay() {
    
    const array = calcDisplayText.split(' ', 3);
    let firstNumber = parseFloat(array[0]);
    let operator = array[1];
    let secondNumber = parseFloat(array[2]);
    let solved; 
    
    if (operator === "/" && secondNumber === 0){
        solved = `You have blown up the universe`;
    }
    //something wrong here
    else if (!secondNumber){
        solved = '';
    }
    else {
        solved = operate(firstNumber, operator, secondNumber);
    }

    return solved;
}




calcButtons.forEach(button => button.addEventListener('click', event => {
    calcDisplayText += `${button.id}`;
    display.innerText = calcDisplayText; 
 }))


operators.forEach(operator => operator.addEventListener('click', event => {
    
    if (/\s/.test(calcDisplayText)){
        let array = calcDisplayText.split(' ');
        let solve;
        //hit two operators in a row, 2 numbers required for calculation appears

        if (array.length === 3){
            solve = solveForDisplay();
            
            if (solve === ''){
                display.innerText = calcDisplayText;
                array.length = 0;
            }
            else {
                calcDisplayText = solve;
                calcDisplayText += ` ${operator.id} `
                display.innerText = calcDisplayText;
                array.length = 0;
            }

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
    calcDisplayText = display.innerText;
    let backspaceCalc = calcDisplayText.slice(0, -1);

    calcDisplayText = backspaceCalc;
    display.innerText = calcDisplayText; 
 })

clearButton.addEventListener('click', event => {
    calcDisplayText = ``;
    display.innerText = "0"; 
 })

equalSign.addEventListener('click', event => {
    let solution;
    //if 1 number only
    if(/^\S*$/.test(calcDisplayText)) {
        display.innerText = calcDisplayText; 
    }
    else{
        solution = solveForDisplay();
        
        if (solution === ``){
            return;
        }
        else{
            calcDisplayText = solution;
            display.innerText = calcDisplayText;
        }
        
    }
    
 })

 periodButton.addEventListener('click', event => {
    let period = "."
    
    if (calcDisplayText.includes(period)){
        return;
    }
    else{
        calcDisplayText += `${periodButton.id}`;
        display.innerText = calcDisplayText;
    }
    
 })

 document.addEventListener('keydown', event => {


    if(event.defaultPrevented){
        return;
    }

    if(event.code === 'Digit0' || event.code === 'Digit1' || event.code === 'Digit2' || event.code === 'Digit3' | event.code === 'Digit4' || event.code === 'Digit5' || event.code === 'Digit6' || event.code === 'Digit7' || event.code === 'Digit8' ||event.code === 'Digit9'){
        
        calcDisplayText += `${event.key}`;
        display.innerText = calcDisplayText; 
    }
    else if (event.code === 'Backspace'){
        calcDisplayText = display.innerText;
        let backspaceCalc = calcDisplayText.slice(0, -1);

        calcDisplayText = backspaceCalc;
        display.innerText = calcDisplayText;
    }
    else if (event.code === 'Enter' || event.code === 'Equal'){
        let solution;
        //if 1 number only
        if(/^\S*$/.test(calcDisplayText)) {
            display.innerText = calcDisplayText; 
        }
        else{
            solution = solveForDisplay();
            
            if (solution === ``){
                return;
            }
            else{
                calcDisplayText = solution;
                display.innerText = calcDisplayText;
            }
        }
    }
    else if(event.code === 'Period'){
        let period = "."
    
        if (calcDisplayText.includes(period)){
            return;
        }
        else{
            calcDisplayText += `${periodButton.id}`;
            display.innerText = calcDisplayText;
        }
    }
    else if(event.code === 'KeyC'){
        calcDisplayText = ``;
        display.innerText = "0";
    }
    else if (event.code === 'Slash' || event.code === 'Minus' || (event.code === 'Equal' && event.shiftKey === true) || event.shiftKey === true && event.code === 'Digit8'){
        if (/\s/.test(calcDisplayText)){
            let array = calcDisplayText.split(' ');
            let solve;
            //hit two operators in a row, 2 numbers required for calculation appears
    
            if (array.length === 3){
                solve = solveForDisplay();
                
                if (solve === ''){
                    display.innerText = calcDisplayText;
                    array.length = 0;
                }
                else {
                    calcDisplayText = solve;
                    calcDisplayText += ` ${event.key} `
                    display.innerText = calcDisplayText;
                    array.length = 0;
                }
    
            }
            else if (array.length < 3){
                calcDisplayText += ` ${event.key} `;
                display.innerText = calcDisplayText;
                array.length = 0;
            }
        }
        else {
            calcDisplayText += ` ${event.key} `;
            display.innerText = calcDisplayText;
        }
    }
 })



