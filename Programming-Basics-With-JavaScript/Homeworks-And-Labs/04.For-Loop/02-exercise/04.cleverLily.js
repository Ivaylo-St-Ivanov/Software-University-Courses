function cleverLily(input) {

    const lilysAge = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const unitPriceOfAToy = Number(input[2]);

    let toysCount = 0;
    let savedMoney = 0;
    let giftMoney = 10;

    for (let i = 1; i <= lilysAge; i++) {
        if (i % 2 !== 0) {
            toysCount++;
        } else {
            savedMoney += giftMoney - 1;
            giftMoney += 10;
        }
    }

    const sumOfToys = toysCount * unitPriceOfAToy;
    const difference = Math.abs(sumOfToys + savedMoney - washingMachinePrice).toFixed(2);

    if (sumOfToys + savedMoney >= washingMachinePrice) {
        console.log(`Yes! ${difference}`);
    } else {
        console.log(`No! ${difference}`);
    }
}
cleverLily(["10", "170", "6"]);