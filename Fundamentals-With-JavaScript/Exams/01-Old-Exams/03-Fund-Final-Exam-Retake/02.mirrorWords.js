function mirrorWords(input) {

    let text = input[0];
    let regexp = /([@|#])(?<one>[A-z]{3,})\1\1(?<two>[A-z]{3,})\1/g;
    let matches = regexp.exec(text);
    let pairsCount = 0;
    let mirrorWords = {};
    let isHaveMirror = false;

    while (matches !== null) {
        pairsCount++;
        let wordOne = matches.groups.one;
        let wordTwo = (matches.groups.two).split('').reverse().join('');
        if (wordOne === wordTwo) {
            isHaveMirror = true;
            mirrorWords[wordOne] = matches.groups.two;
        }

        matches = regexp.exec(text);
    }

    let print = '';
    let entries = Object.entries(mirrorWords);
    let entriesLength = entries.length;
    for (let i = 0; i < entriesLength; i++) {
        let wordOne = entries[i][0];
        let wordTwo = entries[i][1];
        if (i === 0) {
            print += `${wordOne} <=> ${wordTwo}`;
        } else {
            print += `, ${wordOne} <=> ${wordTwo}`;
        }
    }

    if (pairsCount === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${pairsCount} word pairs found!`);
        if (!isHaveMirror) {
            console.log('No mirror words!');
        } else {
            console.log('The mirror words are:');
            console.log(print);
        }
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);