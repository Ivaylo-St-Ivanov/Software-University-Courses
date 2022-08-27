function arrayModifier(input) {

    let inputCopy = input.slice(0);
    let initialArrayValues = inputCopy.shift().split(' ').map(Number);

    let index = 0;
    let command = inputCopy[index++];

    while (command !== 'end') {
        let current = command.split(' ');
        let currentCommand = current.shift();
        let ind1 = Number(current[0]);
        let ind2 = Number(current[1]);
        let multiply = 0;
        let decrease = [];

        switch (currentCommand) {
            case 'swap':
                sliced = initialArrayValues.slice(ind1, ind1 + 1).join('');
                spliced = initialArrayValues.splice(ind2, 1, Number(sliced)).join('');
                initialArrayValues.splice(ind1, 1, Number(spliced));
                break;
            case 'multiply':
                multiply = initialArrayValues[ind1] * initialArrayValues[ind2];
                initialArrayValues.splice(ind1, 1, multiply);
                break;
            case 'decrease':
                decrease = initialArrayValues.map(x => x - 1);
                initialArrayValues = decrease;
                break;
        }

        command = inputCopy[index++];
    }

    console.log(initialArrayValues.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);