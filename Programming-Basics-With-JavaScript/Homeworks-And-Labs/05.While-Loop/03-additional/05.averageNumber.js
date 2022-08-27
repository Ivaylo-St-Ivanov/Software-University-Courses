function averageNumber(input) {

    const num = Number(input[0]);
    let index = 1;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        let currentNum = Number(input[index++]);
        sum += currentNum;
    }

    let averageNum = sum / num;
    console.log(averageNum.toFixed(2));
}
averageNumber(["4", "95", "23", "76", "23"]);