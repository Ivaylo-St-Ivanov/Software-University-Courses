function activationKeys(input) {

    let inputCopy = input.slice(0);
    let rawKey = inputCopy.shift();
    let index = 0;
    let currentLine = inputCopy[index++];

    while (currentLine !== 'Generate') {
        let [command, param1, param2, param3] = currentLine.split('>>>');
        switch (command) {
            case 'Contains':
                let substring = param1;
                if (rawKey.includes(substring)) {
                    console.log(`${rawKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let upperOrLower = param1;
                let startIndexToFlip = Number(param2);
                let endIndexToFlip = Number(param3);
                let partToChange = rawKey.slice(startIndexToFlip, endIndexToFlip);
                let result;
                if (upperOrLower === 'Upper') {
                    result = partToChange.toUpperCase();
                } else if (upperOrLower === 'Lower') {
                    result = partToChange.toLowerCase();
                }
                rawKey = rawKey.replace(partToChange, result);
                console.log(rawKey);
                break;
            case 'Slice':
                let startIndex = Number(param1);
                let endIndex = Number(param2);
                let charsToDelete = rawKey.slice(startIndex, endIndex);
                rawKey = rawKey.replace(charsToDelete, '');
                console.log(rawKey);
                break;
        }

        currentLine = inputCopy[index++];
    }

    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);