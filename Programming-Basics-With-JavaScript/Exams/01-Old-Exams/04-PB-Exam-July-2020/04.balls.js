function balls(input) {

    const ballsCount = Number(input[0]);
    let index = 1;

    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColorBalls = 0;
    let dividesCounter = 0;

    for (let i = 1; i <= ballsCount; i++) {
        // • Ако топката е “red” точките ни се повишават с 5.
        // • Ако топката е “orange” точките ни се повишават с 10.
        // • Ако топката е “yellow” точките ни се повишават с 15.
        // • Ако топката е “white” точките ни се повишават с 20.
        // • Ако топката е “black” точките ни се делят на 2, като закръгляме към по-малкото цяло число.
        let current = input[index++];
        switch (current) {
            case "red": points += 5;
                redBalls++;
                break;
            case "orange": points += 10;
                orangeBalls++;
                break;
            case "yellow": points += 15;
                yellowBalls++;
                break;
            case "white": points += 20;
                whiteBalls++;
                break;
            case "black": points = Math.floor(points / 2);
                dividesCounter++;
                break;
            default: otherColorBalls++;
                break;
        }
    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColorBalls}`);
    console.log(`Divides from black balls: ${dividesCounter}`);
}
balls(["3"
    , "white"
    , "black"
    , "pink"]);