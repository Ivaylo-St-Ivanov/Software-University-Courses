function nextDay(year, month, day) {

    let date = function (year, month, day) {
        let newDate = new Date(year, month - 1, day + 1).toLocaleDateString();
        let [newMonth, newDay, newYear] = newDate.split('/');
        return `${newYear}-${newMonth}-${newDay}`;
    }

    console.log(date(year, month, day));
}
nextDay(2020, 3, 24);