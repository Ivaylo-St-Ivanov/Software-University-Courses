function pipesInPool(input) {

    const v = Number(input[0]);
    const p1 = Number(input[1]);
    const p2 = Number(input[2]);
    const h = Number(input[3]);

    const waterFromP1 = p1 * h;
    const waterFromP2 = p2 * h;
    const waterInPool = waterFromP1 + waterFromP2;
    const p1Percentage = waterFromP1 / waterInPool * 100;
    const p2Percentage = waterFromP2 / waterInPool * 100;
    const percentageFromPool = waterInPool / v * 100;

    if (waterInPool <= v) {
        console.log(`The pool is ${percentageFromPool}% full. Pipe 1: ${p1Percentage.toFixed(2)}%. Pipe 2: ${p2Percentage.toFixed(2)}%.`);
    } else {
        const extraWater = waterInPool - v;
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${extraWater.toFixed(2)} liters.`);
    }
}
pipesInPool(["100", "100", "100", "2.5"]);