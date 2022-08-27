function theImitationGame(input) {

    let inputCopy = input.slice(0);
    let encryptedMessage = inputCopy.shift();
    let index = 0;
    let current = inputCopy[index++];

    while (current !== 'Decode') {
        let [command, param1, param2] = current.split('|');
        switch (command) {
            case 'Move':
                let numberOfLetters = Number(param1);
                    let lettersToMove = encryptedMessage.slice(0, numberOfLetters);
                    let firstPart = encryptedMessage.substring(numberOfLetters,);
                    encryptedMessage = firstPart + lettersToMove;
                break;
            case 'Insert':
                let givenIndex = Number(param1);
                let value = param2; 
                let start = encryptedMessage.slice(0, givenIndex);
                let end = encryptedMessage.slice(givenIndex,);
                encryptedMessage = start + value + end;
                break;
            case 'ChangeAll':
                let substring = param1;
                let replacement = param2;
                let result = encryptedMessage.split(substring).join(replacement);
                encryptedMessage = result;
                break;
        }

        current = inputCopy[index++];
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);