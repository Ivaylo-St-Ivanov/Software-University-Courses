function softUniReception(input) {

    let inputCopy = input.slice(0).map(Number);
    let studentsCount = inputCopy.pop();
    let studentsPerHour = 0;
    
    for (let element of inputCopy) {
        studentsPerHour += element;
    }

    let neededHours = Math.ceil(studentsCount / studentsPerHour);
    let breakTimeInHours = Math.floor(neededHours / 3);
    let totalHours = neededHours + breakTimeInHours;

    console.log(`Time needed: ${totalHours}h.`);
}
softUniReception(['3','2','5','40']);