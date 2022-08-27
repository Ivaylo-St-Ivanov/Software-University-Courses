function bonusScore(input) {

    const num = Number(input[0]);

    let bonus = 0;

    if (num > 1000) {
        bonus = num * 0.1;
    } else if (num > 100) {
        bonus = num * 0.2;
    } else {
        bonus = 5;
    }

    if (num % 2 === 0) {
        bonus = bonus + 1;
    } else if (num % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(num + bonus);
}
bonusScore(["15875"]);