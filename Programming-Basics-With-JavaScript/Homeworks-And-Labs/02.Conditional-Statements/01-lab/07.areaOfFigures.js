function areaOfFigures(input) {

    const figure = input[0];

    if (figure === "square") {
        const a = Number(input[1]);
        const area = a * a;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        const a = Number(input[1]);
        const b = Number(input[2]);
        const area = a * b;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        const r = Number(input[1]);
        const area = Math.PI * (r * r);
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        const a = Number(input[1]);
        const h = Number(input[2]);
        const area = a * h / 2;
        console.log(area.toFixed(3));
    }

}
areaOfFigures(["circle", "6"]);