function treasureHunt(data) {

    let copyData = data.slice(0);
    let initialTreasureChest = copyData.shift().split('|');

    let index = 0;
    let command = copyData[index++];

    while (command !== 'Yohoho!') {
        let current = command.split(' ');
        let currentCommand = current.shift();
        switch (currentCommand) {
            case 'Loot':
                for (let element of current) {
                    if (!initialTreasureChest.includes(element)) {
                        initialTreasureChest.unshift(element);
                    }
                }
                break;
            case 'Drop':
                let dropIndex = Number(current[0]);
                if (dropIndex < 0 || dropIndex > initialTreasureChest.length) {
                    command = copyData[index++];
                    continue;
                }
                let removeLoot = initialTreasureChest.splice(dropIndex, 1);
                initialTreasureChest.push(removeLoot[0]);
                break;
            case 'Steal':
                let stealCount = Number(current[0]);
                let steals = initialTreasureChest.splice(-stealCount).join(', ');
                console.log(steals);
                break;
        }

        command = copyData[index++];
    }

    if (initialTreasureChest.length > 0) {
        let sum = 0;
        for (let element of initialTreasureChest) {
            sum += element.length;
        }
        let averageTreasureGain = sum / initialTreasureChest.length;
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);