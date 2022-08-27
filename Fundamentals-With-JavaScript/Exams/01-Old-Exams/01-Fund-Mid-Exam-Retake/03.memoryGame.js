function memoryGame(data) {
           // 85 от 100
    let dataCopy = data.slice(0);
    let sequence = dataCopy.shift().split(' ');

    let index = 0;
    let command = dataCopy[index++];

    while (command !== 'end') {
        let current = command.split(' ').map(Number);
        let element0 = current[0];
        let element1 = current[1];
        if (element0 === element1 || element0 < 0 || element1 < 0 || element0 > sequence.length -               1 || element1 > sequence.length - 1) {
            let addElement = `-${index}a`;
            sequence.splice((sequence.length / 2), 0, addElement, addElement);
            console.log('Invalid input! Adding additional elements to the board');
        } else {
            if (sequence[element0] === sequence[element1]) {
                let matching = sequence[element0];
                if (element0 > element1) {
                    sequence.splice(element0, 1);
                    sequence.splice(element1, 1);
                } else {
                    sequence.splice(element1, 1);
                    sequence.splice(element0, 1);
                }
                console.log(`Congrats! You have found matching elements - ${matching}!`);
            } else {
                console.log('Try again!');
            }
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${index} turns!`);
            break;
        }

        command = dataCopy[index++];
    }

    if (sequence.length > 0) {
        console.log('Sorry you lose :(\n' +
            `${sequence.join(' ')}`);
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
    ]);