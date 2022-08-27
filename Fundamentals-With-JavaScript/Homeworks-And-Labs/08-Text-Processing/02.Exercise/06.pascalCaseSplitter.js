function pascalCaseSplitter(string) {

    let result = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            result += string[i];
        } else {
            result += ', ' + string[i];
        }
    }

    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');