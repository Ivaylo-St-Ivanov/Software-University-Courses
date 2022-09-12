function daysInAMonth(month, year) {

    'use strict';
    let day = new Date(year, month, 0).getDate();

    return day;
}
console.log(daysInAMonth(2, 2021));