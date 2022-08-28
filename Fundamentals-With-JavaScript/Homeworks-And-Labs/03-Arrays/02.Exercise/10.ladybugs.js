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

            if (field[ladybugOnIndex] != 1 || ladybugOnIndex < 0 || ladybugOnIndex >= fieldSize) {
                continue;
            }

            if (flyLength < 0) {
                flyLength = Math.abs(flyLength);
                if (direction == 'right') {
                    direction = 'left';
                } else {
                    direction = 'right';
                }
            }

            field[startingIndex] = 0;
            if (direction == 'right') {
                ladybugOnIndex += flyLength;
                if (field[ladybugOnIndex] === 1) {
                    while (field[ladybugOnIndex] === 1) {
                        ladybugOnIndex += flyLength;
                    }
                }
                if (field[ladybugOnIndex] < fieldSize) {
                    field[ladybugOnIndex] = 1;
                }
            } else {
                ladybugOnIndex -= flyLength;
                if (field[ladybugOnIndex] === 1) {
                    while (field[ladybugOnIndex] === 1) {
                        ladybugOnIndex -= flyLength;
                    }
                }
                if (field[ladybugOnIndex] >= 0) {
                    field[ladybugOnIndex] = 1;
                }
            }
        }
    }

    console.log(field.join(' '));
}