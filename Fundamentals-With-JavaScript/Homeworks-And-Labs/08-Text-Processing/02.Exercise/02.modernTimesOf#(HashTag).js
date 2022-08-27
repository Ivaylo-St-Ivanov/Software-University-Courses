function modernTimesOfHashTag(string) {

    let words = string.split(' ');
    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let specialWord = word.substring(1);
            let isValid = true;
            for (let i = 0; i < specialWord.length; i++) {
                if (!(specialWord.charCodeAt(i) >= 65 && specialWord.charCodeAt(i) <= 90 ||
                    specialWord.charCodeAt(i) >= 97 && specialWord.charCodeAt(i) <= 122)) {
                    isValid = false;
                }
            }
            if (isValid) {
                console.log(specialWord);
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');