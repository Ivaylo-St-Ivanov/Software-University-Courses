function stringGame(input) {

    let inputCopy = input.slice(0);
    let initialString = inputCopy.shift();
    let index = 0;
    let currentline = inputCopy[index++];

    while (currentline !== 'Done') {
        let [command, param1, param2] = currentline.split(' ');
        switch (command) {
            case 'Change':
                let char = param1;
                let replacement = param2;
                initialString = initialString.replace((RegExp(char, 'g')), replacement);
                console.log(initialString);
                break;
            case 'Includes':
                let substring = param1;
                if (initialString.includes(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'End':
                let end = param1;
                if (initialString.endsWith(end)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Uppercase':
                for (let char of initialString) {
                    let ascii = Number(char.charCodeAt());
                    if ((ascii >= 65 && ascii <= 90) || ascii >= 97 && ascii <= 122) {
                        let newChar = char.toUpperCase();
                        initialString = initialString.replace(char, newChar);
                    }
                }
                console.log(initialString);
                break;
            case 'FindIndex':
                let charToFindIndex = param1;
                let result = initialString.indexOf(charToFindIndex);
                console.log(result);
                break;
            case 'Cut':
                let startIndex = Number(param1);
                let count = Number(param2);
                initialString = initialString.slice(startIndex, startIndex + count);
                console.log(initialString);
                break;
        }

        currentline = inputCopy[index++];
    }
}
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);