function deckOfCards(input) {

    let inputCopy = input.slice(0);
    let listOfCards = inputCopy.shift().split(', ');
    let listOfCardsLength = listOfCards.length;
    let commandsCount = +inputCopy.shift();

    for (let i = 0; i < commandsCount; i++) {
        let current = inputCopy.shift().split(', ');
        let currentCommand = current[0];

        switch (currentCommand) {
            case 'Add':
                let addCard = current[1];
                if (listOfCards.includes(addCard)) {
                    console.log('Card is already in the deck');
                } else {
                    listOfCards.push(addCard);
                    console.log('Card successfully added');
                }
                break;
            case 'Remove':
                let removeCard = current[1];
                if (listOfCards.includes(removeCard)) {
                    listOfCards.splice((listOfCards.indexOf(removeCard)), 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
            case 'Remove At':
                let removeIndex = Number(current[1]);
                if (removeIndex < 0 || removeIndex > listOfCardsLength - 1) {
                    console.log('Index out of range');
                } else {
                    listOfCards.splice(removeIndex, 1);
                    console.log('Card successfully removed');
                }
                break;
            case 'Insert':
                let insertIndex = Number(current[1]);
                let insertCard = current[2];
                if (insertIndex < 0 || insertIndex > listOfCardsLength - 1) {
                    console.log('Index out of range');
                } else if (listOfCards.includes(insertCard)) {
                    console.log('Card is already added');
                } else {
                    listOfCards.splice(insertIndex, 0, insertCard);
                    console.log('Card successfully added');
                }
                break;
        }
    }

    console.log(listOfCards.join(', '));
}
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"]);