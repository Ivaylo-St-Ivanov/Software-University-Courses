function secretChat(input) {

    let inputCopy = input.slice(0);
    let concealedMessage = inputCopy.shift();
    let index = 0;
    let current = inputCopy[index++];

    while (current !== 'Reveal') {
        let [command, param1, param2] = current.split(':|:');
        switch (command) {
            case 'InsertSpace':
                let indexToInsert = param1;
                let firstPart = concealedMessage.substring(0, indexToInsert);
                let secondPart = concealedMessage.substring(indexToInsert,);
                concealedMessage = firstPart + ' ' + secondPart;
                console.log(concealedMessage);
                break;
            case 'Reverse':
                let substring = param1;
                if (concealedMessage.includes(substring)) {
                    concealedMessage = concealedMessage.replace(substring, '');
                    let reversed = substring.split('').reverse().join('');
                    concealedMessage += reversed;
                    console.log(concealedMessage);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let substr = param1;
                let replacement = param2;
                concealedMessage = concealedMessage.split(substr).join(replacement);
                console.log(concealedMessage);
                break;
        }

        current = inputCopy[index++];
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
    ]);