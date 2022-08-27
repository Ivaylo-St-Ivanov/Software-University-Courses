function mergeArrays(array1, array2) {

    let newArray = [];
    let array1Length = array1.length;

    for (let i = 0; i < array1Length; i++) {
        if (i % 2 === 0) {
            // If the index of the element is even, add into the third array the sum of both elements at that index
            newArray.push(Number(array1[i]) + Number(array2[i]));
        } else {
            // If the index of the element is odd, add the concatenation of both elements at that index
            newArray.push((array1[i] + array2[i]).toString());
        }
    }

    console.log(newArray.join(' - '));
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);