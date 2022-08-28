function binaryToDecimal(string) {

    let lastIndex = Number(string.length - 1);
    let result = 0;
    let power = 0;

    for (let i = lastIndex; i >= 0; i--) {
        result += Number(string[i]) * Math.pow(2, power);
        power++;
    }

    console.log(result);
}
binaryToDecimal('11110000');