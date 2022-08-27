function addressBook(data) {

    let addressBookInfo = {};

    for (const current of data) {
        let [name, address] = current.split(':');
        addressBookInfo[name] = address;
    }

    let entries = Object.entries(addressBookInfo);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const current of sorted) {
        console.log(`${current[0]} -> ${current[1]}`);
    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);