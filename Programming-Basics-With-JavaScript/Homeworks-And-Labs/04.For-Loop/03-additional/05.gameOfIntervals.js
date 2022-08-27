function gameOfIntervals(input) {

    const levels = Number(input[0]);
    let index = 1;

    let points = 0;
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    let invalidCounter = 0;

    // • От 0 до 9 - 20 % от числото          • От 30 до 39 - 50 точки
    // • От 10 до 19 - 30 % от числото        • От 40 до 50 - 100 точки
    // • От 20 до 29 - 40 % от числото        • Невалидно число - резултата се дели на 2

    for (let i = 1; i <= levels; i++) {
        let currentLevelPoints = Number(input[index++]);
        if (currentLevelPoints > 39 && currentLevelPoints <= 50) {
            points += 100;
            p5Counter++;
        } else if (currentLevelPoints > 29 && currentLevelPoints < 40) {
            points += 50;
            p4Counter++;
        } else if (currentLevelPoints > 19 && currentLevelPoints < 30) {
            points += 0.4 * currentLevelPoints;
            p3Counter++;
        } else if (currentLevelPoints > 9 && currentLevelPoints < 20) {
            points += 0.3 * currentLevelPoints;
            p2Counter++;
        } else if (currentLevelPoints >= 0 && currentLevelPoints < 10) {
            points += 0.2 * currentLevelPoints;
            p1Counter++;
        } else if (currentLevelPoints > 50 || currentLevelPoints < 0) {
            points /= 2;
            invalidCounter++;
        }
    }

    const p1Percentage = p1Counter / levels * 100;
    const p2Percentage = p2Counter / levels * 100;
    const p3Percentage = p3Counter / levels * 100;
    const p4Percentage = p4Counter / levels * 100;
    const p5Percentage = p5Counter / levels * 100;
    const invalidPercentage = invalidCounter / levels * 100;

    console.log(`${points.toFixed(2)}`);
    console.log(`From 0 to 9: ${p1Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${p2Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${p3Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${p4Percentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${p5Percentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidPercentage.toFixed(2)}%`);
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);