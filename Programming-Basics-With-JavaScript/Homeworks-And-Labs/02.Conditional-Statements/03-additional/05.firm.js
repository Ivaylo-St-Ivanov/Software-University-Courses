function firm(input) {

    const workingDayTime = 8;
    const extraTime = 2;

    const neededHours = Number(input[0]);
    const daysToComplete = Number(input[1]);
    const employeesExtraWorking = Number(input[2]);

    const workingTime = 0.9 * daysToComplete * workingDayTime;
    const extraWorkingTime = employeesExtraWorking * extraTime * daysToComplete;
    const totalTime = Math.floor(workingTime + extraWorkingTime);
    const difference = Math.abs(neededHours - totalTime);

    if (totalTime >= neededHours) {
        console.log(`Yes!${difference} hours left.`);
    } else {
        console.log(`Not enough time!${difference} hours needed.`);
    }
}
firm(["50", "5", "2"]);