function integerAndFloat(num1, num2, num3) {

    const sum = num1 + num2 + num3 + '';
    let type = 'Integer';
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === '.') {
            type = 'Float';
            break;
        }
    }

    console.log(`${sum} - ${type}`);
}
integerAndFloat(9, 100, 1.1);