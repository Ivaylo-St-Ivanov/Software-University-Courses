function energyBooster(input) {

    const fruit = input[0];
    const setSize = input[1];
    const setCount = Number(input[2]);

    const smallSizePackage = 2;
    const bigSizePackage = 5;

    const watermelonSmallSetPrice = 56.00;
    const mangoSmallSetPrice = 36.66;
    const pineappleSmallSetPrice = 42.1;
    const raspberrySmallSetPrice = 20.00;

    const watermelonBigSetPrice = 28.70;
    const mangoBigSetPrice = 19.60;
    const pineappleBigSetPrice = 24.80;
    const raspberryBigSetPrice = 15.20;

    let price = 0;

    switch (setSize) {
        case "small":
            switch (fruit) {
                case "Watermelon": price = smallSizePackage * watermelonSmallSetPrice * setCount; break;
                case "Mango": price = smallSizePackage * mangoSmallSetPrice * setCount; break;
                case "Pineapple": price = smallSizePackage * pineappleSmallSetPrice * setCount; break;
                case "Raspberry": price = smallSizePackage * raspberrySmallSetPrice * setCount; break;
            }
            break;
        case "big":
            switch (fruit) {
                case "Watermelon": price = bigSizePackage * watermelonBigSetPrice * setCount; break;
                case "Mango": price = bigSizePackage * mangoBigSetPrice * setCount; break;
                case "Pineapple": price = bigSizePackage * pineappleBigSetPrice * setCount; break;
                case "Raspberry": price = bigSizePackage * raspberryBigSetPrice * setCount; break;
            }
            break;
    }

    //   При поръчки:
    // • от 400 лв. до 1000 лв. включително има 15% отстъпка
    // • над 1000 лв. има 50% отстъпка
    if (price > 1000) {
        price *= 0.5;
    } else if (price >= 400) {
        price *= 0.85;
    }

    console.log(price.toFixed(2) + " lv.");
}
energyBooster(["Watermelon", "big", "4"]);