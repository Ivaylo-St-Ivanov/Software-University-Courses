function moving(input) {

    const widthFreeSpace = Number(input[0]);
    const lengthFreeSpace = Number(input[1]);
    const hightFreeSpace = Number(input[2]);
    const volumeFreeSpace = widthFreeSpace * lengthFreeSpace * hightFreeSpace;

    let index = 3;
    let current = input[index++];
    let filledSpace = 0;
    let isHaveFreeSpace = true;

    while (current !== "Done") {
        let currentBoxes = Number(current);
        // Бележка: Един кашон е с точни размери: 1m. x 1m. x 1m.
        filledSpace += currentBoxes;
        if (filledSpace >= volumeFreeSpace) {
            isHaveFreeSpace = false;
            break;
        }

        current = input[index++];
    }

    const difference = Math.abs(volumeFreeSpace - filledSpace);
    if (!isHaveFreeSpace) {
        console.log(`No more free space! You need ${difference} Cubic meters more.`);
    } else {
        console.log(`${difference} Cubic meters left.`);
    }
}
moving(["10",
"1",
"2",
"4",
"6",
"Done"]);