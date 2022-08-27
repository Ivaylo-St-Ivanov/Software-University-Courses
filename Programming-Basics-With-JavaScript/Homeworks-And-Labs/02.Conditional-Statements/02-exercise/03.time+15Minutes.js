function timePlus15Minutes(input) {

    const startHour = Number(input[0]);
    const startMinutes = Number(input[1]);

    const timeInMin = startHour * 60 + startMinutes;
    const timePlus15Min = timeInMin + 15;
    let hour = Math.floor(timePlus15Min / 60);
    const minutes = timePlus15Min % 60;

    if (hour > 23) {
        hour = 0;
    }

    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }

}
timePlus15Minutes(["23", "59"]);