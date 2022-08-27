function fishTank(input) {

    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percent = Number(input[3]);

    const capacityInLiters = length * width * height / 1000;
    const finalCapacity = capacityInLiters - capacityInLiters * (percent / 100);

    console.log(finalCapacity);

}
fishTank(["105", "77", "89", "18.5"]);