function housePainting(input) {

    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);

    const doorArea = 1.2 * 2;
    const windowsArea = 1.5 * 1.5 * 2;
    const wallsArea = (x * x) * 2 + (x * y) * 2 - doorArea - windowsArea;
    const roofArea = (x * y) * 2 + (x * h / 2) * 2;

    const greenPaint = wallsArea / 3.4;
    const redPaint = roofArea / 4.3;
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}
housePainting(["6", "10", "5.2"]);