function previousDay(year, month, day) {

    'use strict';
    let result = new Date(year, month - 1, day - 1).toLocaleDateString();
    let [newMonth, newDay, newYear] = result.split('/');

    console.log(`${newYear}-${newMonth}-${newDay}`);
}
previousDay(2016, 10, 1);