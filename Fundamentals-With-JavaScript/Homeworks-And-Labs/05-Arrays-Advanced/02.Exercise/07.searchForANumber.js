function searchForANumber(array1, array2) {

    let array1Copy = array1.slice(0);
    let takeElements = array2[0];
    let deletedElements = array2[1];
    let searchedNumber = array2[2];

    let result = array1Copy.splice(0, takeElements);
    for (let i = 0; i < deletedElements; i++) {
        result.shift();
    }
    let filteredResult = result.filter(x => x === searchedNumber);

    console.log(`Number ${searchedNumber} occurs ${filteredResult.length} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);