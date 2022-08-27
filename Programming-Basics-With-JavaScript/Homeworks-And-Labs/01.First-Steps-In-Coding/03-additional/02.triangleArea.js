function triangleArea(input) {

    const a = Number(input[0]);
    const h = Number(input[1]);

    const triangleArea = a * h / 2;
    console.log(triangleArea.toFixed(2));
}
triangleArea(["7.75", "8.45"]);