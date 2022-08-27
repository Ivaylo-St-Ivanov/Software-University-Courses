function censoredWords(text, word) {

    let wordLength = word.length;
    let consoredWord = '*'.repeat(wordLength);
    let textArray = text.split(word);
    let newText = textArray.join(consoredWord);

    console.log(newText);
}
censoredWords('A small sentence with some words', 'small');