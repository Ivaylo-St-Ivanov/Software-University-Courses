function multiplyBy2(input) {

    let index = 0;
    let num = Number(input[index]);

    let result = 0;

    while (true) {
        if (num < 0) {
            console.log("Negative number!");
            break;
        }

        result = num * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        index++;
        num = Number(input[index]);
    }
}
multiplyBy2(["23.43","12.3245","0","65.23432","23","65","-12"]);