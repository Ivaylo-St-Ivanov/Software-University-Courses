function rightPlace(string1, char, string2) {

    let result = '';

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== '_') {
            result += string1[i];
        } else {
            result += char;
        }
    }

    if (result === string2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String');