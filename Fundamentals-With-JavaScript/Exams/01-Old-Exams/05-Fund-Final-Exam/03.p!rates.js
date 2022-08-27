function pirates(input) {

    let inputCopy = input.slice(0);
    let cities = {};

    let currentLine = inputCopy.shift();
    while (currentLine !== 'Sail') {
        let [city, population, gold] = currentLine.split('||');
        population = Number(population);
        gold = Number(gold);
        if (!cities.hasOwnProperty(city)) {
            cities[city] = {
                'population': population,
                'gold': gold
            };
        } else {
            cities[city]['population'] += Number(population);
            cities[city]['gold'] += Number(gold);
        }

        currentLine = inputCopy.shift();
    }

    let index = 0;
    let current = inputCopy[index++];
    while (current !== 'End') {
        let [event, city, param1, param2] = current.split('=>');
        switch (event) {
            case 'Plunder':
                let people = Number(param1);
                let gold = Number(param2);
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                cities[city]['population'] -= people;
                cities[city]['gold'] -= gold;
                if (cities[city]['population'] <= 0 || cities[city]['gold'] <= 0) {
                    delete cities[city];
                    console.log(`${city} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let goldToIncrease = Number(param1);
                if (goldToIncrease < 0) {
                    console.log('Gold added cannot be a negative number!');
                    break;
                }
                cities[city]['gold'] += goldToIncrease;
                console.log(`${goldToIncrease} gold added to the city treasury. ${city} now has ${cities[city]['gold']} gold.`);
                break;
        }

        current = inputCopy[index++];
    }

    let entries = Object.entries(cities);
    let entriesLength = entries.length;
    if (entriesLength > 0) {
        console.log(`Ahoy, Captain! There are ${entriesLength} wealthy settlements to go to:`);
        for (const [town, info] of entries) {
            console.log(`${town} -> Population: ${info['population']} citizens, Gold: ${info['gold']} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);