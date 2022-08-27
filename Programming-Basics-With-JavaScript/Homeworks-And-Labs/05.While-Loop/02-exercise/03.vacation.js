function vacation(input) {

    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let spendOrSave = input[index++];

    let daysCounter = 0;
    let counterSpendDays = 0;

    while (availableMoney < neededMoney) {
        daysCounter++;
        if (spendOrSave === "spend") {
            let spend = Number(input[index++]);
            availableMoney -= spend;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            counterSpendDays++;
            if (counterSpendDays === 5) {
                console.log("You can't save the money.");
                console.log(daysCounter);
                break;
            }
        } else if (spendOrSave === "save") {
            let save = Number(input[index++]);
            availableMoney += save;
            counterSpendDays = 0;
        }

        spendOrSave = input[index++];
    }

    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);