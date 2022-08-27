function worldSwimmingRecord(input) {

    const recordInSec = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeInSecPerMeter = Number(input[2]);

    const lagInSec = Math.floor(distanceInMeters / 15) * 12.5;
    const ivanTime = distanceInMeters * timeInSecPerMeter + lagInSec;
    const difference = Math.abs(recordInSec - ivanTime);

    if (ivanTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);