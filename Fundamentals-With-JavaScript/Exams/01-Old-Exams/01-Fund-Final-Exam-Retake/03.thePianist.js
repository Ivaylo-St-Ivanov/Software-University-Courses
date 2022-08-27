function thePianist(input) {

    let inputCopy = input.slice(0);
    let initialNumOfpieces = Number(inputCopy.shift());
    let piecesList = inputCopy.splice(0, initialNumOfpieces);
    let list = {};

    for (const current of piecesList) {
        let [piece, composer, key] = current.split('|');
        if (!list.hasOwnProperty(piece)) {
            list[piece] = {};
        }
        list[piece][composer] = key;
    }

    let index = 0;
    let currentLine = inputCopy[index++];

    while (currentLine !== 'Stop') {
        let [command, piece, composer, key] = currentLine.split('|');
        switch (command) {
            case 'Add':
                if (list.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    list[piece] = {};
                    list[piece][composer] = key;
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':
                if (list.hasOwnProperty(piece)) {
                    delete list[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                if (list.hasOwnProperty(piece)) {
                    let newKey = composer;
                    for (const [keyComposer, valueKey] of Object.entries(list[piece])) {
                        list[piece][keyComposer] = newKey;
                    }
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }

        currentLine = inputCopy[index++];
    }

    for (const [piece, info] of Object.entries(list)) {
        let infoArray = Object.entries(info);
        let composer = infoArray[0][0];
        let key = infoArray[0][1];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);