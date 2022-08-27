function theatrePromotions(day, age) {

    const weekdayPriceUntil18Years = 12.00;
    const weekdayPriceUntil64Years = 18.00;
    const weekdayPriceUntil122Years = 12.00;
    const weekendPriceUntil18Years = 15.00;
    const weekendPriceUntil64Years = 20.00;
    const weekendPriceUntil122Years = 15.00;
    const holidayPriceUntil18Years = 5.00;
    const holidayPriceUntil64Years = 12.00;
    const holidayPriceUntil122Years = 10.00;

    let price = 0;

    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                price = weekdayPriceUntil18Years;
            } else if (age > 18 && age <= 64) {
                price = weekdayPriceUntil64Years;
            } else if (age > 64 && age <= 122) {
                price = weekdayPriceUntil122Years;
            } else {
                console.log('Error!');
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                price = weekendPriceUntil18Years;
            } else if (age > 18 && age <= 64) {
                price = weekendPriceUntil64Years;
            } else if (age > 64 && age <= 122) {
                price = weekendPriceUntil122Years;
            } else {
                console.log('Error!');
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = holidayPriceUntil18Years;
            } else if (age > 18 && age <= 64) {
                price = holidayPriceUntil64Years;
            } else if (age > 64 && age <= 122) {
                price = holidayPriceUntil122Years;
            } else {
                console.log('Error!');
            }
            break;
    }

    if (age >= 0 && age <= 122) {
        console.log(price + '$');
    }
}
theatrePromotions('Weekday', 42);