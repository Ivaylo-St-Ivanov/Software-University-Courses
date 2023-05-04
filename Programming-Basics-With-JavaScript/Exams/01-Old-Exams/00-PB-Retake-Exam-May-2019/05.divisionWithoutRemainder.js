function divisionWithoutRemainder(input) {

    const countOfNums = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= countOfNums; i++) {
        const current = Number(input[i]);

        if (current % 2 == 0) {
            p1++;
        }
        if (current % 3 == 0) {
            p2++;
        }
        if (current % 4 == 0) {
            p3++;   
        }
    }

    const p1Percentage = p1 / countOfNums * 100;
    const p2Percentage = p2 / countOfNums * 100;
    const p3Percentage = p3 / countOfNums * 100;

    console.log(p1Percentage.toFixed(2) + '%');
    console.log(p2Percentage.toFixed(2) + '%');
    console.log(p3Percentage.toFixed(2) + '%');
}

divisionWithoutRemainder(['10',
    '680',
    '2',
    '600',
    '200',
    '800',
    '799',
    '199',
    '46',
    '128',
    '65']);