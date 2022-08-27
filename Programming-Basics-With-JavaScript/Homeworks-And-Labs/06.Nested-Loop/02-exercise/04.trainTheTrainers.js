function trainTheTrainers(input) {

    const juryCount = Number(input[0]);
    let index = 1;
    let current = input[index++];

    let sumOfAllGrades = 0;
    let presentationCount = 0;

    while (current !== "Finish") {
        presentationCount++;
        let sumOfGrades = 0;
        for (let i = 1; i <= juryCount; i++) {
            const currentGrade = Number(input[index++]);
            sumOfGrades += currentGrade;
            sumOfAllGrades += currentGrade;
        }
        const averageGrade = sumOfGrades / juryCount;
        console.log(`${current} - ${averageGrade.toFixed(2)}.`);

        current = input[index++];
    }

    const averageGradeOfAll = sumOfAllGrades / (juryCount * presentationCount);
    console.log(`Student's final assessment is ${averageGradeOfAll.toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);