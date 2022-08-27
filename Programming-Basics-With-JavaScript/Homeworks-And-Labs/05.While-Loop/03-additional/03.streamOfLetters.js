function streamOfLetters(input) {

    let index = 0;
    let current = input[index++];

    let secretWord = "";
    let secretMessage = "";
    let counterC = 0;
    let counterO = 0;
    let counterN = 0;
    let commandCounter = 0;

    while (current !== "End") {
        let symbolAsNum = current.charCodeAt();

        if ((symbolAsNum >= 65 && symbolAsNum <= 90) || (symbolAsNum >= 97 && symbolAsNum <= 122)) {
            let letter = current;

            if (letter === "c") {
                counterC++;
                if (counterC === 1) {
                    commandCounter++;
                } else {
                    secretWord += letter;
                }
            } else if (letter === "o") {
                counterO++;
                if (counterO === 1) {
                    commandCounter++;
                } else {
                    secretWord += letter;
                }
            } else if (letter === "n") {
                counterN++;
                if (counterN === 1) {
                    commandCounter++;
                } else {
                    secretWord += letter;
                }
            } else {
                secretWord += letter;
            }

            if (commandCounter === 3) {
                secretMessage += secretWord + " ";
                secretWord = "";
                counterC = 0;
                counterO = 0;
                counterN = 0;
                commandCounter = 0;
            }
        }

        current = input[index++];
    }

    console.log(secretMessage);
}
streamOfLetters(['o',
    'S',
    '%',
    'o',
    'l',
    '^',
    'v',
    'e',
    'c',
    'n',
    '&',
    'm',
    'e',
    'c',
    'o',
    'n',
    'End']);