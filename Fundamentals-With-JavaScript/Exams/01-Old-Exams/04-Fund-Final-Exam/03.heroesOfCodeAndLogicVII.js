function heroesOfCodeAndLogicVII(input) {

    let inputCopy = input.slice(0);
    let heroesCount = Number(inputCopy.shift());
    let heroesArray = inputCopy.splice(0, heroesCount);
    let heroes = {};
    let maxHitPoints = 100;
    let maxManaPoints = 200;

    for (const current of heroesArray) {
        let [hero, hitPoints, manaPoints] = current.split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        if (!heroes.hasOwnProperty(hero)) {
            heroes[hero] = {};
            heroes[hero] = {};
        }
        heroes[hero]['hitPoints'] = hitPoints;
        heroes[hero]['manaPoints'] = manaPoints;
    }

    let index = 0;
    let currentLine = inputCopy[index++];

    while (currentLine !== 'End') {
        let [command, hero, param1, param2] = currentLine.split(' - ');
        switch (command) {
            case 'CastSpell':
                let manaPointsNeeded = Number(param1);
                let spellName = param2;
                if (heroes[hero]['manaPoints'] >= manaPointsNeeded) {
                    heroes[hero]['manaPoints'] -= manaPointsNeeded;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero]['manaPoints']} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(param1);
                let attacker = param2;
                heroes[hero]['hitPoints'] -= damage;
                if (heroes[hero]['hitPoints'] > 0) {
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero]['hitPoints']} HP left!`);
                } else {
                    delete heroes[hero];
                    console.log(`${hero} has been killed by ${attacker}!`);
                }
                break;
            case 'Recharge':
                let amountToRecharge = Number(param1);
                let result = heroes[hero]['manaPoints'] + amountToRecharge;
                if (result > maxManaPoints) {
                    let recharged = maxManaPoints - heroes[hero]['manaPoints'];
                    heroes[hero]['manaPoints'] = maxManaPoints;
                    console.log(`${hero} recharged for ${recharged} MP!`);
                } else {
                    heroes[hero]['manaPoints'] = result;
                    console.log(`${hero} recharged for ${amountToRecharge} MP!`);
                }
                break;
            case 'Heal':
                let amountToHeal = Number(param1);
                let sum = heroes[hero]['hitPoints'] + amountToHeal;
                if (sum > maxHitPoints) {
                    let healed = maxHitPoints - heroes[hero]['hitPoints'];
                    heroes[hero]['hitPoints'] = maxHitPoints;
                    console.log(`${hero} healed for ${healed} HP!`);
                } else {
                    heroes[hero]['hitPoints'] = sum;
                    console.log(`${hero} healed for ${amountToHeal} HP!`);
                }
                break;
        }

        currentLine = inputCopy[index++];
    }

    let entries = Object.entries(heroes);
    for (const entry of entries) {
        let [hero, info] = entry;
        console.log(hero);
        console.log(`  HP: ${info['hitPoints']}`);
        console.log(`  MP: ${info['manaPoints']}`);
    }
}
heroesOfCodeAndLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);