function numberModification(num) {

    let sum = 0;
    let averageSum = 0;
    let numAsString = String(num);

    while (averageSum < 5) {
        for (const char of numAsString) {
            sum += Number(char);
        }
        averageSum = sum / numAsString.length;

        if (averageSum < 5) {
            numAsString += '9';
            sum = 0;
        }
    }

    console.log(numAsString);
}
numberModification(101);