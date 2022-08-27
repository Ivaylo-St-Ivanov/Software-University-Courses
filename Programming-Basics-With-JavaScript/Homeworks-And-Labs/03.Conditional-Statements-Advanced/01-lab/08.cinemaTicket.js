function cinemaTicket(input) {

    const day = input[0];

    if (day === "Wednesday" || day === "Thursday") {
        console.log("14");
    } else if (day === "Saturday" || day === "Sunday") {
        console.log("16");
    } else {
        console.log("12");
    }
}
cinemaTicket(["Sunday"]);