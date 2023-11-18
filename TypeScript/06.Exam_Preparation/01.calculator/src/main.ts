function calculator(num1: number, operator: string, num2: number): void {

    const validOperator = ['+', '-', '*', '/'];

    if (!validOperator.includes(operator)) {
        throw new Error('Invalid operator!');
    }

    const result: number | string | undefined = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num2 !== 0 ? num1 / num2 : 'Cannot divide by zero!'
    }[operator]

    console.log(typeof result == 'number' ? result.toFixed(2) : result);
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(9, '/', 2);
calculator(7, '*', 5);
// calculator(7, '$', 5);
calculator(7, '/', 0);
