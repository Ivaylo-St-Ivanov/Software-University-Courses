function profit(input) {

    let coinsOfOneLeva = Number(input[0]);
    let coinsOfTwoLeva = Number(input[1]);
    let fiveLeva = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= coinsOfOneLeva; i++) {
        for (let j = 0; j <= coinsOfTwoLeva; j++) {
            for (let k = 0; k <= fiveLeva; k++) {
                if (i * 1 + j * 2 + k * 5 == sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit(['5', '3', '1', '7']);