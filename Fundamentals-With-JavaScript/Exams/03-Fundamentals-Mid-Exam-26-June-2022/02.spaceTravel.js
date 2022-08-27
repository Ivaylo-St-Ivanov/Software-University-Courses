function spaceTravel(input) {

    let inputCopy = input.slice(0);
    let travel = inputCopy.shift().split('||');
    let travelLength = travel.length;
    let startingFuel = Number(inputCopy[0]);
    let startingAmmunition = Number(inputCopy[1]);

    for (let i = 0; i < travelLength; i++) {
        let current = travel.shift().split(' ');
        let currentCommand = current[0];

        switch (currentCommand) {
            case 'Travel':
                let distance = Number(current[1]);
                startingFuel -= distance;
                if (startingFuel >= 0) {
                    console.log(`The spaceship travelled ${distance} light-years.`);
                } else {
                    console.log('Mission failed.');
                    return;
                }
                break;
            case 'Enemy':
                let enemyArmour = Number(current[1]);
                if (startingAmmunition >= enemyArmour) {
                    startingAmmunition -= enemyArmour;
                    console.log(`An enemy with ${enemyArmour} armour is defeated.`);
                } else {
                    startingFuel -= enemyArmour * 2;
                    if (startingFuel >= 0) {
                        console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                    } else {
                        console.log('Mission failed.');
                        return;
                    }
                }
                break;
            case 'Repair':
                let repair = Number(current[1]);
                startingFuel += repair;
                startingAmmunition += repair * 2;
                console.log(`Ammunitions added: ${repair * 2}.`);
                console.log(`Fuel added: ${repair}.`);
                break;
            case 'Titan':
                console.log('You have reached Titan, all passengers are safe.');
                return;
        }
    }
}
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
'60',
'100' ]);