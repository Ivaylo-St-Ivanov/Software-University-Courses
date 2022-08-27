function harvest(input) {

    const grapesPerLiter = 2.5;

    const xArea = Number(input[0]);
    const yGrapes = Number(input[1]);
    const zNeededLiters = Number(input[2]);
    const workmen = Number(input[3]);

    const totalGrapes = xArea * yGrapes;
    const producedWine = totalGrapes / grapesPerLiter * 0.4;
    const difference = Math.abs(producedWine - zNeededLiters);

    if (producedWine < zNeededLiters) {
        console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`);
    } else {
        const extraWine = difference / workmen;
        console.log(`Good harvest this year! Total wine: ${Math.floor(producedWine)} liters.`);
        console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(extraWine)} liters per person.`);
    }
}
harvest(["650", "2", "175", "3"]);