function addAndSubtract(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current % 2 === 0) {
            current += i;
        } else {
            current -= i;
        }

        newArray.push(current);
    }

    let sumArray = 0;
    let sumNewArray = 0;

    for (let element of array) {
        sumArray += element;
    }

    for (let element of newArray) {
        sumNewArray += element;
    }

    console.log(newArray);
    console.log(sumArray);
    console.log(sumNewArray);
}
addAndSubtract([5, 15, 23, 56, 35]);