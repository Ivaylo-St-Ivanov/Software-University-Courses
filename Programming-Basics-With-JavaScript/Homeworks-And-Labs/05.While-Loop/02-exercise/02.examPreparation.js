function examPreparation(input) {

    const lowGrades = Number(input[0]);
    let index = 1;
    let current = input[index++];

    let lowGradesCounter = 0;
    let gradeCounter = 0;
    let sumOfGrades = 0;
    let isNeedABreak = false;
    let lastProblem = "";

    while (current !== "Enough") {
        lastProblem = current;
        gradeCounter += 1;
        let currentGrade = Number(input[index++]);
        sumOfGrades += currentGrade;
        if (currentGrade <= 4) {
            lowGradesCounter += 1;
            if (lowGradesCounter === lowGrades) {
                isNeedABreak = true
                console.log(`You need a break, ${lowGradesCounter} poor grades.`);
                break;
            }
        }

        current = input[index++];
    }

    const average = sumOfGrades / gradeCounter;

    if (!isNeedABreak) {
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${gradeCounter}`);
    console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);