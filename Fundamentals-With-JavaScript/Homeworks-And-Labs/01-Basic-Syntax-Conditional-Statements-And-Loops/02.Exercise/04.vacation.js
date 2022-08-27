function vacation(count, type, day) {

    const studentsFridayPricePerOne = 8.45;
    const studentsSaturdayPricePerOne = 9.80;
    const studentsSundayPricePerOne = 10.46;
    const businessFridayPricePerOne = 10.90;
    const businessSaturdayPricePerOne = 15.60;
    const businessSundayPricePerOne = 16;
    const regularFridayPricePerOne = 15;
    const regularSaturdayPricePerOne = 20;
    const regularSundayPricePerOne = 22.50;

    let price = count;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday': price *= studentsFridayPricePerOne; break;
                case 'Saturday': price *= studentsSaturdayPricePerOne; break;
                case 'Sunday': price *= studentsSundayPricePerOne; break;
            }
            // • Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
            if (count >= 30) {
                price *= 0.85;
            }
            break;
        case 'Business':
            // • Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
            if (count >= 100) {
                price -= 10;
            }
            switch (day) {
                case 'Friday': price *= businessFridayPricePerOne; break;
                case 'Saturday': price *= businessSaturdayPricePerOne; break;
                case 'Sunday': price *= businessSundayPricePerOne; break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday': price *= regularFridayPricePerOne; break;
                case 'Saturday': price *= regularSaturdayPricePerOne; break;
                case 'Sunday': price *= regularSundayPricePerOne; break;
            }
            // • Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
            if (count >= 10 && count <= 20) {
                price *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(110, 'Business', 'Sunday');