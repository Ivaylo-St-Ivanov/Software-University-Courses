function deckOfCards(cards) {

    'use strict';
    function playingCards(face, suit) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (!validFaces.includes(face) || !Object.keys(validSuits).includes(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

    try {
        let result = [];
        for (const card of cards) {
            let face = card.slice(0, -1);
            let suit = card.slice(-1);
            result.push(playingCards(face, suit));
        }
        console.log(result.join(' '));
    } catch (error) {
        console.log(error.message);
    }
}
deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);