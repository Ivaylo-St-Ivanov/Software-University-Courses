function sleepyTomCat(input) {

    const daysOfTheYear = 365;
    const normForPlay = 30000;
    const playInWorckingDay = 63;
    const playInRestDay = 127;

    const restDay = Number(input[0]);

    const workingDay = daysOfTheYear - restDay;
    const totalTimeForPlay = workingDay * playInWorckingDay + restDay * playInRestDay;
    const difference = Math.abs(normForPlay - totalTimeForPlay);
    const hours = Math.floor(difference / 60);
    const minutes = difference % 60;

    if (totalTimeForPlay > normForPlay) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}
sleepyTomCat(["113"]);