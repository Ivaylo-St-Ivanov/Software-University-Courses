function mountainRun(input) {

    const recordInSec = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeInSecPerMeter = Number(input[2]);

    let totalTimeInSec = distanceInMeters * timeInSecPerMeter;
    // наклона на терена го забавя на всеки 50 м. с 30 секунди.
    const lag = Math.floor(distanceInMeters / 50);
    const lagPer50MetersInSec = 30;
    const totalLag = lag * lagPer50MetersInSec;
    totalTimeInSec += totalLag;

    if (totalTimeInSec < recordInSec) {
        console.log(`Yes! The new record is ${totalTimeInSec.toFixed(2)} seconds.`);
    } else {
        const difference = totalTimeInSec - recordInSec;
        console.log(`No! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
mountainRun(["5554.36", "1340", "3.23"]);