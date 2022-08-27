function cinemaTickets(input) {

    let index = 0;
    let current = input[index++];

    let totalTickets = 0;
    let studentTicketCounter = 0;
    let standardTicketCounter = 0;
    let kidTicketCounter = 0;

    while (current !== "Finish") {
        let places = Number(input[index++]);
        let currentTicket = input[index++];
        let currentFilmTicketsCounter = 0;
        while (currentTicket !== "End") {
            currentFilmTicketsCounter++;
            totalTickets++;
            switch (currentTicket) {
                case "student": studentTicketCounter++; break;
                case "standard": standardTicketCounter++; break;
                case "kid": kidTicketCounter++; break;
            }
            if (places - currentFilmTicketsCounter  === 0) {
                break;
            }
            
            currentTicket = input[index++];
        }
        const percentageForCurrentFilm = currentFilmTicketsCounter / places * 100;
        console.log(`${current} - ${percentageForCurrentFilm.toFixed(2)}% full.`);

        current = input[index++];
    }

    const studentTicketsPrecentage = studentTicketCounter / totalTickets * 100;
    const standardTicketsPrecentage = standardTicketCounter / totalTickets * 100;
    const kidTicketsPrecentage = kidTicketCounter / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsPrecentage.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPrecentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPrecentage.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);