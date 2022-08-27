function sumFirstAndLastArrayElements(input) {

    const firstElement = Number(input[0]);
    const lastElement = Number(input[input.length-1]);
    const sum = firstElement + lastElement;

    console.log(sum);
}
sumFirstAndLastArrayElements([10, 17, 22, 33]);