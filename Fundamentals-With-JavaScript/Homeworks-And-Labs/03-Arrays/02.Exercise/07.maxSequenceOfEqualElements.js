function maxSequenceOfEqualElements(array) {

    let longestSequence = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentSequence = [];
        for (let j = i; j < arrayLength; j++) {
            if (array[i] === array[j]) {
                currentSequence.push(array[i]);
            } else {
                break;
            }
            if (currentSequence.length > longestSequence.length) {
                longestSequence = currentSequence;
            }
        }
    }

    console.log(longestSequence.join(' '));
}
maxSequenceOfEqualElements([4, 4, 4, 4]);