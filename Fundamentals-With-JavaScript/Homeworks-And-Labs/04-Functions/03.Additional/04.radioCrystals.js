function radioCrystals(input) {

    let targetThickness = input.shift();
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        let currentThickness = input[i];
        console.log(`Processing chunk ${currentThickness} microns`);

        while (currentThickness > targetThickness) {
            if (currentThickness / 4 >= targetThickness) {
                let cutCount = 0;
                while (currentThickness / 4 >= targetThickness) {
                    currentThickness /= 4;
                    cutCount++;
                }
                console.log(`Cut x${cutCount}`);
                if (!Number.isInteger(currentThickness)) {
                    currentThickness = Math.floor(currentThickness);
                }
                console.log('Transporting and washing');
            } else if (currentThickness * 0.8 >= targetThickness) {
                let lapCount = 0;
                while (currentThickness * 0.8 >= targetThickness) {
                    currentThickness *= 0.8;
                    lapCount++;
                }
                console.log(`Lap x${lapCount}`);
                if (!Number.isInteger(currentThickness)) {
                    currentThickness = Math.floor(currentThickness);
                }
                console.log('Transporting and washing');
            } else if (currentThickness - 20 >= targetThickness) {
                let grindCount = 0;
                while (currentThickness - 20 >= targetThickness) {
                    currentThickness -= 20;
                    grindCount++;
                }
                console.log(`Grind x${grindCount}`);
                if (!Number.isInteger(currentThickness)) {
                    currentThickness = Math.floor(currentThickness);
                }
                console.log('Transporting and washing');
            } else if (currentThickness - 2 >= targetThickness - 1) {
                let etchCount = 0;
                while (currentThickness - 2 >= targetThickness - 1) {
                    currentThickness -= 2;
                    etchCount++;
                }
                console.log(`Etch x${etchCount}`);
                if (!Number.isInteger(currentThickness)) {
                    currentThickness = Math.floor(currentThickness);
                }
                console.log('Transporting and washing');
            }
        }
        if (currentThickness < targetThickness) {
            currentThickness += 1;
            console.log('X-ray x1');
        }
        console.log(`Finished crystal ${currentThickness} microns`);
    }
}
radioCrystals([1000, 4000, 8100]);