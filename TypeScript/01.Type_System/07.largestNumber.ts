function largestNumber(num1: number, num2: number, num3: number): void {
    let result: number | undefined;

    if (num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }

    if (num3 > result) {
        result = num3;
    }

    console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16);