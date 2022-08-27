function distanceBetweenPoints(x1, y1, x2, y2) {

    let distance = function (x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return result;
    }

    console.log(distance(x1, y1, x2, y2));
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);