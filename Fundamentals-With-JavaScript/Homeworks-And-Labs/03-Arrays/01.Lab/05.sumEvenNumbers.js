function sumEvenNumbers(array) {

    let result = 0;

    for (let elements of array) {
        if (elements % 2 === 0) {
            result += Number(elements);
        }
    }

    console.log(result);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);