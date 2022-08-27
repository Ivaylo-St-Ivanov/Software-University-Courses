function vacationBooksList(input) {

    const pages = Number(input[0]);
    const pagesPerOneHour = Number(input[1]);
    const days = Number(input[2]);

    const totalHours = pages / pagesPerOneHour;
    const hoursPerDay = totalHours / days;
    console.log(hoursPerDay);

}
vacationBooksList(["432", "15", "4"]);