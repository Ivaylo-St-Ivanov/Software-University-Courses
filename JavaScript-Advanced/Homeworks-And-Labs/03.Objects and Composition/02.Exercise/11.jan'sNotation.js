function jan_sNotation(input) {

    'use strict';
    let result = [];

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    for (const current of input) {
        if (typeof current == 'string') {
            if (result.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            const a = result.pop();
            const b = result.pop();
            const res = operations[current](b, a);
            result.push(res);
        } else {
            result.push(current);
        }
    }

    if (result.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(result.join());
    }
}
jan_sNotation([31,
    2,
    '+',
    11,
    '/']);

console.log('------------');

jan_sNotation([5,
    '*',
]);