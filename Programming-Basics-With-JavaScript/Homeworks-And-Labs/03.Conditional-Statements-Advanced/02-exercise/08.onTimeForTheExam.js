function onTimeForTheExam(input) {

    const hourOfExam = Number(input[0]);
    const minutesOfTheExam = Number(input[1]);
    const hourOfArrival = Number(input[2]);
    const minutesOfArrival = Number(input[3]);

    const examTimeInMin = hourOfExam * 60 + minutesOfTheExam;
    const arrivalTimeInMin = hourOfArrival * 60 + minutesOfArrival;
    const difference = Math.abs(examTimeInMin - arrivalTimeInMin);
    const hours = Math.floor(difference / 60);
    const minutes = difference % 60;

    if (arrivalTimeInMin > examTimeInMin) {
        console.log("Late");
        if (difference < 60) {
            console.log(`${minutes} minutes after the start`);
        } else if (difference >= 60) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (arrivalTimeInMin === examTimeInMin || difference <= 30) {
        console.log("On time");
        console.log(`${minutes} minutes before the start`);
    } else if (difference > 30) {
        console.log("Early");
        if (difference < 60) {
            console.log(`${minutes} minutes before the start`);
        } else if (difference >= 60) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(["11", "30", "10", "55"]);