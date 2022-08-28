function dungeonestDark(input) {

    let health = 100;
    let coins = 0;

    let inputCopy = input.slice(0);
    inputCopy = inputCopy[0].split('|');
    let rooms = 0;

    for (const current of inputCopy) {
        rooms++;
        let [command, num] = current.split(' ');
        if (command == 'potion') {
            health += Number(num);
            if (health > 100) {
                let rest = health - 100;
                health = 100;
                console.log(`You healed for ${num - rest} hp.`);
            } else {
                console.log(`You healed for ${num} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            coins += Number(num);
            console.log(`You found ${num} coins.`);
        } else {
            health -= Number(num);
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${rooms}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);