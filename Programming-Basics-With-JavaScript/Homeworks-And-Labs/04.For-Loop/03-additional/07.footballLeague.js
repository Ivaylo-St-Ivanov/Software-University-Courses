function footballLeague(input) {

    const capacity = Number(input[0]);
    const fensCount = Number(input[1]);
    let index = 2;

    let counterA = 0;
    let counterB = 0;
    let counterV = 0;
    let counterG = 0;

    for (let i = 1; i <= fensCount; i++) {
        let current = input[index++];
        switch (current) {
            case "A": counterA++; break;
            case "B": counterB++; break;
            case "V": counterV++; break;
            case "G": counterG++; break;
        }
    }

    const sectorAPrecentage = counterA / fensCount * 100;
    const sectorBPrecentage = counterB / fensCount * 100;
    const sectorVPrecentage = counterV / fensCount * 100;
    const sectorGPrecentage = counterG / fensCount * 100;
    const allFensPercentage = (counterA + counterB + counterV + counterG) / capacity * 100;

    console.log(`${sectorAPrecentage.toFixed(2)}%`);
    console.log(`${sectorBPrecentage.toFixed(2)}%`);
    console.log(`${sectorVPrecentage.toFixed(2)}%`);
    console.log(`${sectorGPrecentage.toFixed(2)}%`);
    console.log(`${allFensPercentage.toFixed(2)}%`);
}
footballLeague(["76"
    , "10"
    , "A"
    , "V"
    , "V"
    , "V"
    , "G"
    , "B"
    , "A"
    , "V"
    , "B"
    , "B"])