const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    if(calculationType ==='ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType==='SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
     } else if(calculationType==='MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';  
     } else if(calculationType==='DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';  
     }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}


function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult("SUBTRACT");
}

function multiply() {
    calculateResult("MULTIPLY");
}
function divide() {
    calculateResult("DIVIDE");
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

