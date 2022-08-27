function race(input) {

    let inputCopy = input.slice(0);
    let listOfParticipants = {};
    let listOfParticipantsArray = inputCopy.shift().split(', ');
    for (const name of listOfParticipantsArray) {
        listOfParticipants[name] = 0;
    }

    let lettersPattern = /[A-Za-z]+/gm;
    let digitsPattern = /\d/gm;
    let index = 0;
    let current = inputCopy[index++];

    while (current !== 'end of race') {
        let currentName = current.match(lettersPattern).join('');
        let currentDistance = current.match(digitsPattern);
        let distance = currentDistance.reduce((a, b) => Number(a) + Number(b));

        if (listOfParticipants.hasOwnProperty(currentName)) {
            listOfParticipants[currentName] += distance;
        }

        current = inputCopy[index++];
    }

    let sorted = Object.entries(listOfParticipants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);