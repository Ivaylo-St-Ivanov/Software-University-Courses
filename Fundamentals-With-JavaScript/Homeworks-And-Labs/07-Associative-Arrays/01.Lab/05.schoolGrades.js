function schoolGrades(data) {

    let studentInfo = new Map();

    for (const current of data) {
        let currentStudent = current.split(' ');
        let studentName = currentStudent.shift();
        let grades = currentStudent;

        if (!studentInfo.has(studentName)) {
            studentInfo.set(studentName, grades);
        } else {
            let currentGrades = studentInfo.get(studentName);
            for (let grade of grades) {
                currentGrades.push(grade);
            }
            studentInfo.set(studentName, currentGrades);
        }
    }

    let sorted = Array.from(studentInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [student, grade] of sorted) {
        let sumGrades = 0;
        for (const current of grade) {
            sumGrades += Number(current);
        }
        let averageGrade = sumGrades / grade.length;
        console.log(`${student}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);