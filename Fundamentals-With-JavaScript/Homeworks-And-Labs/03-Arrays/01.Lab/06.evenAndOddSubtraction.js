function evenAndOddSubtraction(array) {

    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (let current of array) {
        if (current % 2 === 0) {
            sumOfEven += current;
        } else {
            sumOfOdd += current;
        }
    }

    let difference = sumOfEven - sumOfOdd;
    console.log(difference);
}
evenAndOddSubtraction([1,2,3,4,5,6]);