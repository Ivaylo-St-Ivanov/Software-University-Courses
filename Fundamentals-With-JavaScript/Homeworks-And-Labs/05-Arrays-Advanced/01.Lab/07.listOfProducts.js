function listOfProducts(array) {

    let copyArray = array.slice();
    let sortingArray = copyArray.sort();
    let position = 1;
    for (let element of sortingArray) {
        console.log(`${position}.${element}`);
        position++;
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);