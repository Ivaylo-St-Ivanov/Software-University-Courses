function stringSubstring(word, text) {

    let searchedWord = word.toLowerCase();
    let textToLowerCase = text.toLowerCase().split(' ');
    for (const current of textToLowerCase) {
        if (current === searchedWord) {
            return console.log(`${word}`);
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language');