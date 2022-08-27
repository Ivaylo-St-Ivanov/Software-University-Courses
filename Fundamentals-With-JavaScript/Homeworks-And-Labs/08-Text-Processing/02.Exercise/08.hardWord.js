function hardWord(input) {

    let letter = input[0];
    let unknownWords = input[1];
    let holes = [];

    for (const word of unknownWords) {
        let hole = '_'.repeat(word.length);
        holes.push(hole);
    }

    unknownWords.sort((a, b) => b.length - a.length);
    holes.sort((a, b) => b.length - a.length);

    let holesLength = holes.length;
    for (let i = 0; i < holesLength; i++) {
        letter = letter.replace(holes[i], unknownWords[i]);
    }

    console.log(letter);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);