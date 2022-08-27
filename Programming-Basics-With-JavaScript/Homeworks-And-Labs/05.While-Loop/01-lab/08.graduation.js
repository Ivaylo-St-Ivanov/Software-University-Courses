function graduation(input) {

    const name = input[0];
    let index = 1;
    let annualEvaluation = Number(input[index]);

    let gradeCount = 1;
    let sumEvaluation = 0;
    let excludedCount = 0;
    let isExcluded = false;

    while (gradeCount <= 12) {
        if (annualEvaluation < 4) {
            excludedCount += 1;
            if (excludedCount > 1) {
                isExcluded = true;
                break;
            }
            continue;
        }

        sumEvaluation += annualEvaluation;
        gradeCount += 1;
        index++;
        annualEvaluation = Number(input[index]);
    }

    const averageEvaluation = sumEvaluation / 12;

    if (isExcluded) {
        console.log(`${name} has been excluded at ${gradeCount} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageEvaluation.toFixed(2)}`);
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);