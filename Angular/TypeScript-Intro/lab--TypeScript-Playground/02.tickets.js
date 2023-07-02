var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function sorted(descriptions, sortingCriteria) {
    var result = descriptions
        .map(function (t) { return t.split('|'); })
        .map(function (_a) {
        var destination = _a[0], price = _a[1], status = _a[2];
        return new Ticket(destination, Number(price), status);
    })
        .sort(function (a, b) { return a[sortingCriteria].localeCompare(b[sortingCriteria]); });
    console.log(result);
    return result;
}
sorted([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
