function aluminumJoinery(input) {

    const unitPrice90X130 = 110;
    const unitPrice100X150 = 140;
    const unitPrice130X180 = 190;
    const unitPrice200X300 = 250;

    const joineryCount = Number(input[0]);
    const joineryType = input[1];
    const delivery = input[2];

    let price = 0;

    // Фирмата приема само поръчки на едро (над 10 бр.).
    if (joineryCount > 10) {
        switch (joineryType) {
            case "90X130": price = joineryCount * unitPrice90X130;
                // Над 30 броя – 5% , Над 60 броя – 8%
                if (joineryCount > 60) {
                    price *= 0.92;
                } else if (joineryCount > 30) {
                    price *= 0.95;
                }
                break;
            case "100X150": price = joineryCount * unitPrice100X150;
                // Над 40 броя – 6% , Над 80 броя – 10%
                if (joineryCount > 80) {
                    price *= 0.9;
                } else if (joineryCount > 40) {
                    price *= 0.94;
                }
                break;
            case "130X180": price = joineryCount * unitPrice130X180;
                // Над 20 броя – 7% , Над 50 броя – 12%
                if (joineryCount > 50) {
                    price *= 0.88;
                } else if (joineryCount > 20) {
                    price *= 0.93;
                }
                break;
            case "200X300": price = joineryCount * unitPrice200X300;
                // Над 25 броя – 9% , Над 50 броя – 14%
                if (joineryCount > 50) {
                    price *= 0.86;
                } else if (joineryCount > 25) {
                    price *= 0.91;
                }
                break;
        }
    }

    if (delivery === "With delivery") {
        price += 60;
    }

    // • Ако поръчката надвишава 99 броя – върху крайната цена се начисляват допълнителни 4% отстъпка (след като се начисли цената за доставка, ако има такава).
    if (joineryCount > 99) {
        price *= 0.96;
    }

    // • При поръчка под 10 бр. на конзолата да бъде изписано "Invalid order"
    if (joineryCount < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["105", "100X150", "With delivery"]);