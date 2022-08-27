function reverseAnArrayOfNumbers(num, array) {

    let newArray = [];

    for (let i = 0; i < num; i++) {
         let currentElement = array[i];
         newArray.push(currentElement);
    }

    let revNewArray = [];

    for (let i = newArray.length-1; i >= 0; i--) {
        revNewArray.push(newArray[i]);
    }

    console.log(revNewArray.join(' '));
}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);