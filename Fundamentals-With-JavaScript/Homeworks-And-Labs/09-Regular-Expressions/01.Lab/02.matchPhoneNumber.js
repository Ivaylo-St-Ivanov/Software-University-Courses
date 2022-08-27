function matchPhoneNumber(numbers) {

    let validNumbers = /\+359([ |-])2\1\d{3}\1\d{4}\b/gm;
    let matches = numbers[0].match(validNumbers);
    console.log(matches.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);