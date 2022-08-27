function greaterNumber(input) {

    const firstNum = Number(input[0]);
    const secondNum = Number(input[1]);

    if (firstNum > secondNum) {
        console.log(firstNum);
    } else {
        console.log(secondNum);
    }

}
greaterNumber(["5", "7"]);