function needForSpeed3(input) {

    let inputCopy = input.slice(0);
    let numOfCars = Number(inputCopy.shift());
    let carsInfo = {};

    for (let i = 0; i < numOfCars; i++) {
        let [car, mileage, fuel] = inputCopy.shift().split('|');
        if (!carsInfo.hasOwnProperty(car)) {
            carsInfo[car] = {};
        }
        carsInfo[car]['mileage'] = Number(mileage);
        carsInfo[car]['fuel'] = Number(fuel);
    }

    let index = 0;
    let current = inputCopy[index++];

    while (current !== 'Stop') {
        let [command, car, param1, param2] = current.split(' : ');
        switch (command) {
            case 'Drive':
                let distance = Number(param1);
                let fuelToConsumed = Number(param2);
                if (carsInfo[car]['fuel'] < fuelToConsumed) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carsInfo[car]['mileage'] += distance;
                    carsInfo[car]['fuel'] -= fuelToConsumed;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelToConsumed} liters of fuel consumed.`);
                }
                if (carsInfo[car]['mileage'] >= 100000) {
                    delete carsInfo[car];
                    console.log(`Time to sell the ${car}!`);
                }
                break;
            case 'Refuel':
                let fuelToRefill = Number(param1);
                let maxTankHold = 75;
                if (carsInfo[car]['fuel'] + fuelToRefill > maxTankHold) {
                    let difference = maxTankHold - carsInfo[car]['fuel'];
                    carsInfo[car]['fuel'] = maxTankHold;
                    console.log(`${car} refueled with ${difference} liters`);
                } else {
                    carsInfo[car]['fuel'] += fuelToRefill;
                    console.log(`${car} refueled with ${fuelToRefill} liters`);
                }
                break;
            case 'Revert':
                let kilometers = Number(param1);
                let minMileage = 10000;
                if (carsInfo[car]['mileage'] - kilometers < minMileage) {
                    carsInfo[car]['mileage'] = minMileage;
                } else {
                    carsInfo[car]['mileage'] -= kilometers;
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }

        current = inputCopy[index++];
    }

    let entries = Object.entries(carsInfo);
    for (const current of entries) {
        let car = current[0];
        let carInfo = Object.values(current[1]);
        let mileage = carInfo[0];
        let fuel = carInfo[1];

        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}
needForSpeed3([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);