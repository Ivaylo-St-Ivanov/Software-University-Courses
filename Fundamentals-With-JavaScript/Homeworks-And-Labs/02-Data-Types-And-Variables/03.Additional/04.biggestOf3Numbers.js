function biggestOf3Numbers(num1, num2, num3) {

    let biggest = Number.MIN_SAFE_INTEGER;

    if (num1 > biggest) {
        biggest = num1;
    }
    if (num2 > biggest) {
        biggest = num2;
    }
    if (num3 > biggest) {
        biggest = num3;
    }

    console.log(biggest);
}
biggestOf3Numbers(-2, 7, 3);