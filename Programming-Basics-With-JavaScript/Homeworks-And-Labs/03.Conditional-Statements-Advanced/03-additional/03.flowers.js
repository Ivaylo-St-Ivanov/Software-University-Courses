function flowers(input) {

    const chrysanthemumsSpringSummerPrice = 2.00;
    const rosesSpringSummerPrice = 4.10;
    const tulipsSpringSummerPrice = 2.50;
    const chrysanthemumsAutumnWinterPrice = 3.75;
    const rosesAutumnWinterPrice = 4.50;
    const tulipsAutumnWinterPrice = 4.15;
    const arranging = 2.00;

    const chrysanthemumsCount = Number(input[0]);
    const rosesCount = Number(input[1]);
    const tulipsCount = Number(input[2]);
    const season = input[3];
    const day = input[4];

    let price = 0;

    // • В празнични дни цените на всички цветя се увеличават с 15%.
    //   Предлагат се следните отстъпки:
    // • За закупени повече от 7 лалета през пролетта – 5% от цената на целият букет.
    // • За закупени 10 или повече рози през зимата – 10% от цената на целият букет.
    // • За закупени повече от 20 цветя общо през всички сезони – 20% от цената на целият букет.

    if (season === "Spring" || season === "Summer") {
        price = chrysanthemumsCount * chrysanthemumsSpringSummerPrice + rosesCount * rosesSpringSummerPrice + tulipsCount * tulipsSpringSummerPrice;
        if (day === "Y") {
            price *= 1.15;
        }
        if (tulipsCount > 7 && season === "Spring") {
            price *= 0.95;
        }
    } else if (season === "Autumn" || season === "Winter") {
        price = chrysanthemumsCount * chrysanthemumsAutumnWinterPrice + rosesCount * rosesAutumnWinterPrice + tulipsCount * tulipsAutumnWinterPrice;
        if (day === "Y") {
            price *= 1.15;
        }
        if (rosesCount >= 10 && season === "Winter") {
            price *= 0.9;
        }
    }

    if (chrysanthemumsCount + rosesCount + tulipsCount > 20) {
        price *= 0.8;
    }

    const totalPrice = price + arranging;
    console.log(totalPrice.toFixed(2));
}
flowers(["10", "10", "10", "Autumn", "N"]);