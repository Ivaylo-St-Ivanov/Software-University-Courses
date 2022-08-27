function factorialDivision(num1, num2) {

    function factorialNums(firstNum, secondNum) {
        let firstNumSum = firstNum;
        let secondNumSum = secondNum;
        for (let i = firstNum - 1; i > 0; i--) {
            firstNumSum *= i;
        }

        for (let j = secondNum - 1; j > 0; j--) {
            secondNumSum *= j;
        }

        return firstNumSum / secondNumSum;
    }

    let result = factorialNums(num1, num2);
    console.log(result.toFixed(2));
}
factorialDivision(6, 2);