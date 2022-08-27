function pcGameShop(input) {

    const gamesSoldCount = Number(input[0]);
    let index = 1;

    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;

    for (let i = 1; i <= gamesSoldCount; i++) {
        let current = input[index++];
        switch (current) {
            case "Hearthstone": hearthstoneCounter++; break;
            case "Fornite": forniteCounter++; break;
            case "Overwatch": overwatchCounter++; break;
            default: othersCounter++; break;
        }
    }

    const hearthstonePercentage = hearthstoneCounter / gamesSoldCount * 100;
    const fornitePercentage = forniteCounter / gamesSoldCount * 100;
    const overwatchPercentage = overwatchCounter / gamesSoldCount * 100;
    const othersPercentage = othersCounter / gamesSoldCount * 100;

    console.log(`Hearthstone - ${hearthstonePercentage.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercentage.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercentage.toFixed(2)}%`);
    console.log(`Others - ${othersPercentage.toFixed(2)}%`);
}
pcGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]);