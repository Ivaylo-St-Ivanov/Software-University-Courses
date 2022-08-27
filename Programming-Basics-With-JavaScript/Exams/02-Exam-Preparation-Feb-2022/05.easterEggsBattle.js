function easterEggsBattle(input) {

    let firstPlayerEggs = Number(input[0]);
    let secondPlayerEggs = Number(input[1]);
    let index = 2;
    let current = input[index++];

    while (current !== "End of battle") {
        switch (current) {
            case "one": secondPlayerEggs--; break;
            case "two": firstPlayerEggs--; break;
        }
        if (firstPlayerEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            break;
        } else if (secondPlayerEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            break;
        }

        current = input[index++];
    }

    if (current === "End of battle") {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
}
easterEggsBattle(["5",
    "4",
    "one",
    "two",
    "one",
    "two",
    "two",
    "End of battle"]);