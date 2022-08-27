function dayOfWeek(dayAsNum) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (dayAsNum >= 1 && dayAsNum <= 7) {
        console.log(days[dayAsNum-1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(6);