function multiplicationTable(input) {

    const num = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let result = i * num;
        console.log(`${i} * ${num} = ${result}`);
    }
}
multiplicationTable(["5"]);