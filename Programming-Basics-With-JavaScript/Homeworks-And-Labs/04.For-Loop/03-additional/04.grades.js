function grades(input) {

    const studentsCount = Number(input[0]);
    let index = 1;

    let counterTopGrades = 0;
    let counterGradesBetween4And5 = 0;
    let counterGradesBetween3And4 = 0;
    let counterLowGrades = 0;
    let sumOfGrades = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let currentGrade = Number(input[index++]);
        sumOfGrades += currentGrade;
        if (currentGrade > 4.99) {
            counterTopGrades++;
        } else if (currentGrade > 3.99) {
            counterGradesBetween4And5++;
        } else if (currentGrade > 2.99) {
            counterGradesBetween3And4++;
        } else {
            counterLowGrades++;
        }
    }

    const topGaradesPercentage = counterTopGrades / studentsCount * 100;
    const gradesBetween4And5Percentage = counterGradesBetween4And5 / studentsCount * 100;
    const gradesBetween3And4Percentage = counterGradesBetween3And4 / studentsCount * 100;
    const lowGaradesPercentage = counterLowGrades / studentsCount * 100;
    const averageGrades = sumOfGrades / studentsCount;

    console.log(`Top students: ${topGaradesPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${gradesBetween4And5Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${gradesBetween3And4Percentage.toFixed(2)}%`);
    console.log(`Fail: ${lowGaradesPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrades.toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);