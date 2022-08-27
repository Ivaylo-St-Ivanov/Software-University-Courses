function condenseArrayToNumber(array) {

    while (array.length - 1 > 0) {
        let condensed = [];
        for(let i = 0; i < array.length - 1; i++) {
            condensed.push(array[i] + array[i + 1]);
        }

        array = condensed;
    }

    console.log(array.toString());
}
condenseArrayToNumber([5, 0, 4, 1, 2]); 