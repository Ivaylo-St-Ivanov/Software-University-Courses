function arrayRotation(array, rotations) {

    let newArray = [];

    for (let element of array) {
        newArray.push(element);
    }
    let newArrayLength = newArray.length;

    for (let i = 1; i <= rotations; i++) {
        let rotationArray = [];
        for (let j = 1; j <= newArrayLength; j++) {
            if (j === newArrayLength) {
                rotationArray.push(newArray[0]);
            } else {
                rotationArray.push(newArray[j]);
            }
        }
        newArray = rotationArray;
    }

    console.log(newArray.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);