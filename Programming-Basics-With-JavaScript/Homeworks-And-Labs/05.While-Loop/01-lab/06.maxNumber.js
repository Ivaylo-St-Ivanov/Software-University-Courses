function maxNumber(input) {

    let index = 0;
    let element = input[index];

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (element !== "Stop") {
        let num = Number(element);
        if (num > maxNumber) {
            maxNumber = num;
        }
        index++;
        element = input[index];
    }

    console.log(maxNumber);
}
maxNumber(["45", "-20", "7", "99", "Stop"]);