function softUniBarIncome(input) {

    let inputAsString = input.join(' ');
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.0-9]*?(?<price>\d+(\.\d+)?)\$/g;
    let current = pattern.exec(inputAsString);
    let totalSum = 0;

    while (current) {
        let customer = current.groups.customer;
        let product = current.groups.product;
        let count = current.groups.count;
        let price = current.groups.price;
        let currentSum = count * price;
        totalSum += currentSum;

        console.log(`${customer}: ${product} - ${currentSum.toFixed(2)}`);
        current = pattern.exec(inputAsString);
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);