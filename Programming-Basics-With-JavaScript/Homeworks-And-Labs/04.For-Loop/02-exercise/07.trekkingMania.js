function trekkingMania(input) {

    const numberOfGrups = Number(input[0]);
    let index = 1;

    let climbingMusala = 0;
    let climbingMontBlanc = 0;
    let climbingKilimanjaro = 0;
    let climbingK2 = 0;
    let climbingEverest = 0;

    for (let i = 1; i <= numberOfGrups; i++) {
        let peopleInCurrentGrup = Number(input[index++]);
        if (peopleInCurrentGrup > 40) {
            climbingEverest += peopleInCurrentGrup;
        } else if (peopleInCurrentGrup > 25) {
            climbingK2 += peopleInCurrentGrup;
        } else if (peopleInCurrentGrup > 12) {
            climbingKilimanjaro += peopleInCurrentGrup;
        } else if (peopleInCurrentGrup > 5) {
            climbingMontBlanc += peopleInCurrentGrup;
        } else {
            climbingMusala += peopleInCurrentGrup;
        }
    }

    const allClimbers = climbingMusala + climbingMontBlanc + climbingKilimanjaro + climbingK2 + climbingEverest;
    const climbingMusalaPercentage = climbingMusala / allClimbers * 100;
    const climbingMontBlancPercentage = climbingMontBlanc / allClimbers * 100;
    const climbingKilimanjaroPercentage = climbingKilimanjaro / allClimbers * 100;
    const climbingK2Percentage = climbingK2 / allClimbers * 100;
    const climbingEverestPercentage = climbingEverest / allClimbers * 100;

    console.log(climbingMusalaPercentage.toFixed(2) + "%");
    console.log(climbingMontBlancPercentage.toFixed(2) + "%");
    console.log(climbingKilimanjaroPercentage.toFixed(2) + "%");
    console.log(climbingK2Percentage.toFixed(2) + "%");
    console.log(climbingEverestPercentage.toFixed(2) + "%");
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);