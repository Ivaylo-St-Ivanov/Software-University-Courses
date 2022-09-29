function subtract() {

    'use strict';
    const num1 = document.getElementById('firstNumber').value;
    const num2 = document.getElementById('secondNumber').value;
    const result = +num1 - +num2;
    document.getElementById('result').textContent = result;
}