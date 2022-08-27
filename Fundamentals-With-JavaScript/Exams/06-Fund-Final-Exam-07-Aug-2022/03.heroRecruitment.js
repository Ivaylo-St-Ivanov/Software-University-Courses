function heroRecruitment(input) {

    let index = 0;
    let currentLine = input[index++];
    let heroes = {};

    while (currentLine !== 'End') {
        let [command, hero, spell] = currentLine.split(' ');
        switch (command) {
            case 'Enroll':
                if (heroes.hasOwnProperty(hero)) {
                    console.log(`${hero} is already enrolled.`);
                } else {
                    heroes[hero] = new Set();
                }
                break;
            case 'Learn':
                if (heroes.hasOwnProperty(hero)) {
                    if (heroes[hero].has(spell)) {
                        console.log(`${hero} has already learnt ${spell}.`);
                    } else {
                        heroes[hero].add(spell);
                    }
                } else {
                    console.log(`${hero} doesn't exist.`);
                }
                break;
            case 'Unlearn':
                if (heroes.hasOwnProperty(hero)) {
                    if (heroes[hero].has(spell)) {
                        heroes[hero].delete(spell);
                    } else {
                        console.log(`${hero} doesn't know ${spell}.`);
                    }
                } else {
                    console.log(`${hero} doesn't exist.`);
                }
                break;
        }

        currentLine = input[index++];
    }

    console.log('Heroes:');
    let entries = Object.entries(heroes);
    for (const current of entries) {
        let hero = current[0];
        let spells = current[1];
        spells = Array.from(spells);
        let print = '';
        for (const spell of spells) {
            print += spell + ', ';
        }
        print = print.slice(0, print.length - 2);
        console.log(`== ${hero}: ${print}`);
    }
}
heroRecruitment(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"]);