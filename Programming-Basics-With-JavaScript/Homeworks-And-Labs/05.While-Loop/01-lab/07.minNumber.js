function minNumber(input) {

    let element = input[0];
    let index = 1;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (element !== "Stop") {
        let currentNum = Number(element);
        if (currentNum < minNumber) {
            minNumber = currentNum;
        }

        element = input[index];
        index++;
    }

    console.log(minNumber);
}
minNumber(["45", "-20", "7", "99", "Stop"]);