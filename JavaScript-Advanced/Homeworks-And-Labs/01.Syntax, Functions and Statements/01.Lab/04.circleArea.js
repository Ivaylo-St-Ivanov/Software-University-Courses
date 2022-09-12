function circleArea(param) {

    let type = typeof param;
    
    if (type == 'number') {
        let area = (Math.PI * param ** 2).toFixed(2);
        console.log(area);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
circleArea('name');