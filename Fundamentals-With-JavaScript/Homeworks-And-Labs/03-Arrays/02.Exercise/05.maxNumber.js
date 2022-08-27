function maxNumber(array) {

    let arrayLength = array.length;
    let maxNumArray = [];
    
    for (let i = 0; i < arrayLength; i++) {
        let currentNum = array[i];
        let isMaxNum = true;
        for (let j = i + 1; j < arrayLength; j++) {
            if (currentNum <= array[j]) {
                isMaxNum = false;
                break;
            }
        }

        if (isMaxNum) {
            maxNumArray.push(currentNum);
        }
    }

    console.log(maxNumArray.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);
