function sortNumbers(num1, num2, num3) {

    let array = [];
    array.push(num1);
    array.push(num2);
    array.push(num3);
    array.sort((a, b) => b - a);

    for (const num of array) {
        console.log(num);
    }
}
sortNumbers(2, 1, 3);