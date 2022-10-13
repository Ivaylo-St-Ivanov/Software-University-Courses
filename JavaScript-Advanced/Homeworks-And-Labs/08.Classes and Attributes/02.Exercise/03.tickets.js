function tickets(description, sortingCriterion) {

    'use script';
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const ticketInfo = [];

    for (const current of description) {
        const [destination, price, status] = current.split('|');

        ticketInfo.push(new Ticket(destination, price, status));
    }

    const sorted = sortingCriterion == 'price'
                        ? ticketInfo.sort((a, b) => a[sortingCriterion] - b[sortingCriterion])
                        : ticketInfo.sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion]));

    return sorted;
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));

console.log('---------------------------');

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));