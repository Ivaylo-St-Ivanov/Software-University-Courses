function manOWar(data) {

    let dataCopy = data.slice(0);
    let pirateShipStatus = dataCopy.shift().split('>').map(Number);
    let pirateShipStatusLength = pirateShipStatus.length;
    let warshipStatus = dataCopy.shift().split('>').map(Number);
    let warshipStatusLength = warshipStatus.length;
    let maxHealth = +dataCopy.shift();

    let index = 0;
    let command = dataCopy[index++];

    while (command !== 'Retire') {
        let current = command.split(' ');
        let currentCommand = current.shift();
        let i = Number(current[0]);

        switch (currentCommand) {
            case 'Fire':
                let warshipDamage = Number(current[1]);
                if (i < 0 || i > warshipStatusLength - 1) {
                    command = dataCopy[index++];
                    continue;
                }
                warshipStatus[i] -= warshipDamage;
                if (warshipStatus[i] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
                break;
            case 'Defend':
                let j = Number(current[1]);
                let pirateShipDamage = Number(current[2]);
                if (i < 0 || j < 0 || i > pirateShipStatusLength || j > pirateShipStatusLength) {
                    command = dataCopy[index++];
                    continue;
                }
                for (let x = i; x <= j; x++) {
                    pirateShipStatus[x] = pirateShipStatus[x] - pirateShipDamage;
                    if (pirateShipStatus[x] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
                break;
            case 'Repair':
                let health = Number(current[1]);
                if (i < 0 || i > pirateShipStatusLength - 1) {
                    command = dataCopy[index++];
                    continue;
                }
                pirateShipStatus[i] += health;
                if (pirateShipStatus[i] > maxHealth) {
                    pirateShipStatus[i] = maxHealth;
                }
                break;
            case 'Status':
                let needBreak = maxHealth * 0.2;
                let countSections = pirateShipStatus.filter(x => x < needBreak);
                console.log(`${countSections.length} sections need repair.`);
                break;
        }

        command = dataCopy[index++];
    }

    let pirateShipStatusSum = 0;
    let warshipStatusSum = 0;
    for (let element of pirateShipStatus) {
        pirateShipStatusSum += element;
    }
    for (let element of warshipStatus) {
        warshipStatusSum += element;
    }
    console.log(`Pirate ship status: ${pirateShipStatusSum}\n` +
        `Warship status: ${warshipStatusSum}`);
}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);