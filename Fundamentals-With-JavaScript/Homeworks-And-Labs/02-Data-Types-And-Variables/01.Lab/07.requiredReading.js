function requiredReading(pages, pagesReadPerHour, days) {

    const timeToRead = pages / pagesReadPerHour;
    const hoursPerDay = timeToRead / days;
    console.log(hoursPerDay);
}
requiredReading(432, 15, 4);