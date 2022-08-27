function houseParty(array) {

    let copyArray = array.slice(0);
    let guestsList = [];

    let copyArrayLength = copyArray.length;
    for (let i = 0; i < copyArrayLength; i++) {
        let current = copyArray[i].split(' ');
        let name = current[0];
        if (current.includes('not')) {
            if (guestsList.includes(name)) {
                let indexName = guestsList.indexOf(name);
                guestsList.splice(indexName, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestsList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestsList.push(name);
            }
        }
    }

    let print = guestsList.join('\n');
    console.log(print);
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);