function wordOccurrences(input) {

    let wordOccurrencesMap = new Map();

    for (let word of input) {
        if (!wordOccurrencesMap.has(word)) {
            wordOccurrencesMap.set(word, 1);
        } else {
            currentValue = wordOccurrencesMap.get(word);
            wordOccurrencesMap.set(word, (currentValue + 1));
        }
    }

    let sorted = Array.from(wordOccurrencesMap).sort((a, b) => b[1] - a[1]);

    for (const [word, value] of sorted) {
        console.log(`${word} -> ${value} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);