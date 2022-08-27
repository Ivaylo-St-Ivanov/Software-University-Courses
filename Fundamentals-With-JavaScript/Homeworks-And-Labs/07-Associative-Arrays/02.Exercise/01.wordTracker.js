function wordTracker(input) {

    let inputCopy = input.slice(0);
    let wordsMap = new Map();
    let searchedWords = inputCopy.shift().split(' ');

    for (const current of searchedWords) {
        wordsMap.set(current, 0);
    }

    for (const word of inputCopy) {
        if (wordsMap.has(word)) {
            let currentValue = wordsMap.get(word);
            wordsMap.set(word, (currentValue + 1));
        }
    }

    let sorted = Array.from(wordsMap).sort((a, b) => b[1] - a[1]);

    for (const [word, value] of sorted) {
        console.log(`${word} - ${value}`);
    }
}
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);