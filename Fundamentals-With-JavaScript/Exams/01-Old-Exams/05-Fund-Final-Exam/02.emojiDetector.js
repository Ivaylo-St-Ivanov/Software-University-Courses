function emojiDetector(input) {

    let text = input[0];
    let regexp = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/gm;
    let digitsRegexp = /\d/gm;

    let digits = text.match(digitsRegexp);
    digits = digits.join('');
    let sum = 0;
    for (const digit of digits) {
        if (sum === 0) {
            sum = digit;
        } else {
            sum *= digit;
        }
    }
    console.log(`Cool threshold: ${sum}`);

    let emojis = text.match(regexp);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    let matches = regexp.exec(text);
    while (matches) {
        let current = matches[0];
        let currentEmoji = current.slice(2, current.length - 2);
        let coolness = 0;
        for (const char of currentEmoji) {
            let digit = Number(char.charCodeAt());
            coolness += digit;
        }

        if (coolness >= sum) {
            console.log(current);
        }

        matches = regexp.exec(text);
    }
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);