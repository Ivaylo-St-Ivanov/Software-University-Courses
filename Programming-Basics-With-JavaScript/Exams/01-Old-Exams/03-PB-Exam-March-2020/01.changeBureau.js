function changeBureau(input) {

    const bitcoinCount = Number(input[0]);
    const chineseYuanCount = Number(input[1]);
    const commission = Number(input[2]);

    // • 1 биткойн = 1168 лева.
    // • 1 китайски юан = 0.15 долара.
    // • 1 долар = 1.76 лева.
    // • 1 евро = 1.95 лева.
    const oneBitcoinInLeva = 1168;
    const oneChineseYuanInDolar = 0.15;
    const oneDolarInLeva = 1.76;
    const oneEuroInLeva = 1.95;
    const levaFromBitcoin = bitcoinCount * oneBitcoinInLeva;
    const dolarsFromChineseYuan = chineseYuanCount * oneChineseYuanInDolar;
    const levaFromDolars = dolarsFromChineseYuan * oneDolarInLeva;
    let euroFromLeva = (levaFromBitcoin + levaFromDolars) / oneEuroInLeva;
    // Обменното бюро има комисионна от 0 до 5 процента от крайната сума в евро.
    euroFromLeva -= commission / 100 * euroFromLeva;

    console.log(euroFromLeva.toFixed(2));
}
changeBureau(["1", "5", "5"]);