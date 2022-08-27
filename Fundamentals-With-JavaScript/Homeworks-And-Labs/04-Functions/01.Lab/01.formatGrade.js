function formatGrade(grade) {

    let formattedGrade = grade.toFixed(2);
    let description = '';

    if (grade < 3) {
        formattedGrade = '2';
        description = 'Fail';
    } else if (grade < 3.5) {
        description = 'Poor';
    } else if (grade < 4.5) {
        description = 'Good';
    } else if (grade < 5.5) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }

    console.log(`${description} (${formattedGrade})`);
}
formatGrade(5.5);