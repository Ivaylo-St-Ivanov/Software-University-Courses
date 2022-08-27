function bombNumbers(array1, array2) {

    let array1Copy = array1.slice(0);
    let bombNum = array2[0];
    let bombPower = array2[1];
    let searchIndex = array1Copy.indexOf(bombNum);

    while (searchIndex !== -1) {
        let index = searchIndex - bombPower;
        if (index < 0) {
            index = 0;
        }
        let deleted = array1Copy.splice(index, (bombPower * 2 + 1));

        searchIndex = array1Copy.indexOf(bombNum);
    }

    let sum = 0;
    array1Copy.forEach(element => {
        sum += element;
    });

    console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);