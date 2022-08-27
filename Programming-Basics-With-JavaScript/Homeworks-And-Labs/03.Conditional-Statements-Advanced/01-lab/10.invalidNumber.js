function invalidNumber(input) {

    const num = Number(input[0]);

    const isValid = (num >= 100 && num <= 200 || num === 0);
    if (!isValid) {
        console.log("invalid");
    }

}
invalidNumber(["0"]);