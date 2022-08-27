function commonElements(array1, array2) {

    let array1Length = array1.length;
    let array2Length = array2.length;

    for (let i = 0; i < array1Length; i++) {
        for (let j = 0; j < array2Length; j++) {
            if (array1[i] === array2[j]) {
                console.log(array1[i]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);