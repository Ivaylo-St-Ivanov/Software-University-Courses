function convertorInchesToCentimeters(inches: number): number {
    // 1 inch = 2.54 centimeters
    const oneInchInCen: number = 2.54;
    const result: number = inches * oneInchInCen;

    return result;
}

console.log(convertorInchesToCentimeters(7));
