function theLift(data) {
              // 80 от 100
    let wagons = data.slice(0);
    let queue = +wagons.shift();
    wagons = wagons.join('').split(' ').map(Number);
    // Every wagon should have a maximum of 4 people on it.
    let maxPeopleInWagon = 4;
    let wagonsLength = wagons.length;
    let isHaveEmptySpots = false;

    for (let i = 0; i < wagonsLength; i++) {
        let emptySpots = maxPeopleInWagon - wagons[i];
        if (emptySpots > 0) {
            if (queue < emptySpots) {
                wagons[i] = queue;
                queue = 0;
                isHaveEmptySpots = true;
            } else {
                wagons[i] = maxPeopleInWagon;
                queue -= emptySpots;
            }
        }
    }

    if (queue === 0 && isHaveEmptySpots) {
        console.log(`The lift has empty spots!\n` +
            `${wagons.join(' ')}`);
    } else if (queue > 0 && !isHaveEmptySpots) {
        console.log(`There isn't enough space! ${queue} people in a queue!\n` +
        `${wagons.join(' ')}`);
    } else {
        console.log(`${wagons.join(' ')}`);
    }
}
theLift([
    "15",
    "0 0 0 0 0"
]);