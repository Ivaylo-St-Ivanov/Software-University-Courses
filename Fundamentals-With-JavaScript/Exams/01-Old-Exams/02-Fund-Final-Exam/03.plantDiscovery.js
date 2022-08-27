function plantDiscovery(input) {

    let inputCopy = input.slice(0);
    let countOfPlants = inputCopy.shift();
    let plantsArray = inputCopy.splice(0, countOfPlants);
    let plantsInfo = {};

    for (const current of plantsArray) {
        let [plant, rarity] = current.split('<->');
        plantsInfo[plant] = { rarity, rating: [] };
    }

    let index = 0;
    let currentLine = inputCopy[index++];

    while (currentLine !== 'Exhibition') {
        let info = currentLine.split(': ');
        let command = info[0];
        let [plant, param] = info[1].split(' - ');
        if (!plantsInfo.hasOwnProperty(plant)) {
            console.log('error');
            currentLine = inputCopy[index++];
            continue;
        }
        switch (command) {
            case 'Rate':
                let rating = param;
                plantsInfo[plant]['rating'].push(rating);
                break;
            case 'Update':
                let newRarity = param;
                plantsInfo[plant]['rarity'] = newRarity;
                break;
            case 'Reset':
                plantsInfo[plant]['rating'] = [];
                break;
        }

        currentLine = inputCopy[index++];
    }

    console.log('Plants for the exhibition:');
    let entries = Object.entries(plantsInfo);
    for (const line of entries) {
        let plant = line[0];
        let info = Object.values(line[1]);
        let rarity = info[0];
        let ratingArray = info[1];
        let rating = 0;
        for (const el of ratingArray) {
            rating += Number(el);
        }
        let averageRating = 0;
        if (rating === 0) {
            averageRating = 0;
        } else {
            averageRating = rating / ratingArray.length;
        }

        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);