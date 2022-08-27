function cardGame(input) {

    let persons = {};

    for (const current of input) {
        let [name, cards] = current.split(': ');
        cards = cards.split(', ');
        if (persons.hasOwnProperty(name) === false) {
            persons[name] = new Set();
        }
        for (const currentCard of cards) {
            persons[name].add(currentCard);
        }
    }

    let type = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }
    let faces = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    for (const [name, cards] of Object.entries(persons)) {
        let sum = 0;
        for (const card of cards) {
            let typePower = type[card.slice(-1)];
            let facePower = faces[card[0]];
            sum += facePower * typePower;
        }

        console.log(`${name}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);