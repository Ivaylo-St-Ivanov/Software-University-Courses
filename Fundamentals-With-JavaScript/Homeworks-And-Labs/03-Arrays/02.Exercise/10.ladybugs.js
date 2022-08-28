function ladybugs(input) {

    let inputCopy = input.slice(0);
    let fieldSize = inputCopy.shift();
    let ladybugsIndexes = inputCopy.shift().split(' ').map(Number);

    let field = new Array(fieldSize).fill(0);
    for (let index of ladybugsIndexes) {
        if (index >= 0 && index < fieldSize) {
            field[Number(index)] = 1;
        }
    }

    for (element of inputCopy) {
        let current = element.split(' ');
        let startingIndex = +current[0];
        if (field[startingIndex] === 1) {
            let ladybugOnIndex = startingIndex;
            let direction = current[1];
            let flyLength = +current[2];

            if (direction === 'left') {
                flyLength *= -1;
            }

            while (field[ladybugOnIndex] === 1 && ladybugOnIndex >= 0 && ladybugOnIndex < fieldSize) {
                ladybugOnIndex += flyLength;
            }

            field[startingIndex] = 0;
            if (ladybugOnIndex >= 0 && ladybugOnIndex < fieldSize) {
                field[ladybugOnIndex] = 1;
            }
        }
    }

    console.log(field.join(' '));
}
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]);