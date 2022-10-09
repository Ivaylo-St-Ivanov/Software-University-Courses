function calculator() {

    // 'use strict';
    return {
        init(selector1, selector2, result) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            sum = document.querySelector(result);
        },
        add: () => {
            sum.value = Number(num1.value) + Number(num2.value);
        },
        subtract: () => {
            sum.value = Number(num1.value) - Number(num2.value);
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');