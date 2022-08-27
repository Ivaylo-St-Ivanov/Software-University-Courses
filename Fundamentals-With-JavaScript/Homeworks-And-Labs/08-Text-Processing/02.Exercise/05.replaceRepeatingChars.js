function replaceRepeatingChars(string) {

    let newString = string[0];
    for (const char of string) {
        if (char !== newString[newString.length - 1]) {
            newString += char;
        }
    }
    console.log(newString);
}
replaceRepeatingChars('qqqwerqwecccwd');