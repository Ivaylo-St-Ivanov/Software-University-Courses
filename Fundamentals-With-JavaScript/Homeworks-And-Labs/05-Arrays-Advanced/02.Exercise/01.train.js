function train(input) {

    let inputCopy = input.slice(0);
    let wagons = inputCopy.shift().split(' ');
    let maxCapacity = Number(inputCopy.shift());

    for (const current of inputCopy) {
        let [param1, param2] = current.split(' ');
        if (param1 === "Add") {
            let passengers = Number(param2);
            wagons.push(passengers);
        } else {
            let passengers = Number(param1);
            let wagonsLength = wagons.length;
            for (let i = 0; i < wagonsLength; i++) {
                let currentPassengers = Number(wagons[i]);
                let result = currentPassengers + passengers;
                if (result <= maxCapacity) {
                    wagons.splice(i, 1, result);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);