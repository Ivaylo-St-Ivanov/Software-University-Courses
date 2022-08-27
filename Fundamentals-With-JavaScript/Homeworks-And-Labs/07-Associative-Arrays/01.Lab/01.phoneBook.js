function phoneBook(data) {

    let phoneBookInfo = {};

    data.forEach(element => {
        let [name, phoneNumber] = element.split(' ');
        phoneBookInfo[name] = phoneNumber;
    });

    for (let name in phoneBookInfo) {
        console.log(`${name} -> ${phoneBookInfo[name]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);