function smallestTwoNumbers(array) {

    let sortArray = array.sort((a,b) => a - b);
    let result = sortArray.slice(0, 2).join(' ');
    return result;
}
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));