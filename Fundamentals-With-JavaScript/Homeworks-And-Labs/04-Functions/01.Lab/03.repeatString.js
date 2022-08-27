function repeatString(string, repeatCount) {

    let newString = '';

    for (let i = 1; i <= repeatCount; i++) {
        newString += string;
    }

    return newString;
}
console.log(repeatString("abc", 3));