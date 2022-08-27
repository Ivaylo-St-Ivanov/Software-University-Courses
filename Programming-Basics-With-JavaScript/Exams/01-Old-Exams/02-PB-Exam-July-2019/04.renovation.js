function renovation(input) {

    const wallH = Number(input[0]);
    const wallW = Number(input[1]);
    const percentageNotPaint = Number(input[2]);
    let index = 3;
    let current = input[index++];

    // 4 стени с еднакви размери
    const wallsCount = 4;
    const area = wallH * wallW * wallsCount;
    // Площта за боядисване да бъде закръглена нагоре до най-близкото цяло число.
    let areaToPaint = Math.ceil(area - percentageNotPaint / 100 * area);

    while (current !== "Tired!") {
        let currentPaintLiters = Number(current);
        // един литър боя боядисва един квадратен метър от стената
        areaToPaint -= currentPaintLiters;
        if (areaToPaint <= 0) {
            let paintResidue = Math.abs(areaToPaint);
            if (paintResidue > 0) {
                console.log(`All walls are painted and you have ${paintResidue} l paint left!`);
            } else {
                console.log("All walls are painted! Great job, Pesho!");
            }
            break;
        }

        current = input[index++];
    }

    if (current === "Tired!") {
        console.log(`${areaToPaint} quadratic m left.`);
    }
}
renovation(["2",
"3",
"25",
"6",
"7",
"8"]);