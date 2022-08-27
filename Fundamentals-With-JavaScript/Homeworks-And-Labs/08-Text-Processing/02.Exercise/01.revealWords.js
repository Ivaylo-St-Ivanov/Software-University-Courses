function revealWords(param1, param2) {

    let words = param1.split(', ');
    for (const word of words) {
        let wordAsTemplate = '*'.repeat(word.length);
        param2 = param2.replace(wordAsTemplate, word);
    }

    console.log(param2);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');