function partyTime(input) {

    let inputCopy = input.slice(0);
    let indexOfParty = inputCopy.indexOf('PARTY');
    let data = inputCopy.splice(0, indexOfParty);
    let vipList = [];
    let regularList = [];

    for (const guest of data) {
        if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
            vipList.push(guest);
        } else {
            regularList.push(guest);
        }
    }

    for (const guest of inputCopy) {
        if (vipList.includes(guest)) {
            let indexOfGuest = vipList.indexOf(guest);
            vipList.splice(indexOfGuest, 1);
        } else if (regularList.includes(guest)) {
            let indexOfGuest = regularList.indexOf(guest);
            regularList.splice(indexOfGuest, 1);
        }
    }

    console.log(vipList.length + regularList.length);
    console.log(vipList.join('\n'));
    console.log(regularList.join('\n'));
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);