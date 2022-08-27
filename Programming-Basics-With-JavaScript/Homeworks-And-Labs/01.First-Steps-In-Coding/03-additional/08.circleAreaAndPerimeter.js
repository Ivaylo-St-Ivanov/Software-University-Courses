function circleAreaAndPerimeter(input) {

    const r = Number(input[0]);

    const area = Math.PI * Math.pow(r, 2);
    const perimeter = 2 * Math.PI * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
circleAreaAndPerimeter(["4.5"]);