function countStringOccurrences(text, word) {

    let counter = 0;
    let words = text.split(' ');

    for (const current of words) {
        if (current === word) {
            counter++;
        }
    }

    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
'is');