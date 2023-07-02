class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function sorted(descriptions: string[], sortingCriteria: string) {
    const result = descriptions
        .map(t => t.split('|'))
        .map(([destination, price, status]) => new Ticket(destination, Number(price), status))
        .sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));

    console.log(result);
    return result;
}

sorted(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
);