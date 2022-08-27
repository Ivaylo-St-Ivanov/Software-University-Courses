function suitcasesLoad(input) {

    const capacity = Number(input[0]);
    let index = 1;
    let current = input[index++];

    let emptySpace = capacity;
    let suitcaseCounter = 0;
    let isEnoughSpace = true;

    while (current !== "End") {
        let currentSuitcaseContent = Number(current);
        if (emptySpace - currentSuitcaseContent < 0) {
            isEnoughSpace = false;
            break;
        }
        suitcaseCounter++;
        if (suitcaseCounter % 3 === 0) {
            // Обемът на всеки трети куфар трябва да се увеличава с 10%, поради загубата на пространство при начина на подреждане.
            emptySpace -= currentSuitcaseContent * 1.1;
        } else {
            emptySpace -= currentSuitcaseContent;
        }

        current = input[index++];
    }

    if (isEnoughSpace) {
        console.log("Congratulations! All suitcases are loaded!");
    } else {
        console.log("No more space!");
    }
    console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
}
suitcasesLoad(["550",
    "100",
    "252",
    "72",
    "End"]);