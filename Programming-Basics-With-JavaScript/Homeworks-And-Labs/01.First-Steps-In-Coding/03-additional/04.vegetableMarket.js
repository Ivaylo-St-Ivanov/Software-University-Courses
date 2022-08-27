function vegetableMarket(input) {

    const pricePerKgVegetables = Number(input[0]);
    const pricePerKgFruits = Number(input[1]);
    const vegetables = Number(input[2]);
    const fruits = Number(input[3]);

    const incomeInLeva = pricePerKgVegetables * vegetables + pricePerKgFruits * fruits;
    const incomeInEuro = incomeInLeva / 1.94;
    console.log(incomeInEuro.toFixed(2));
}
vegetableMarket(["1.5", "2.5", "10", "10"]);