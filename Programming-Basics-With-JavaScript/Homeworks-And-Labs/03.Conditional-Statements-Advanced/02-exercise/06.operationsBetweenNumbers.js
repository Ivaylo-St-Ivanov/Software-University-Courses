function operationsBetweenNumbers(input) {

    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operator = input[2];

    let result = 0;
    let evenOdd = 0;

    switch (operator) {
        case "+": result = n1 + n2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
            break;
        case "-": result = n1 - n2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
            break;
        case "*": result = n1 * n2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
            break;
        case "/": result = n1 / n2;
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            }
            break;
        case "%": result = n1 % n2;
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;
    }
}
operationsBetweenNumbers(["11", "8", "*"]);