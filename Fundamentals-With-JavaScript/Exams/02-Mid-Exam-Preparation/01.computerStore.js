function computerStore(array) {

    let copyArray = array.slice(0);
    let typeOfCustomer = copyArray.pop();
    copyArray = copyArray.map(Number);
    let priceWithoutTaxes = 0;

    for (let element of copyArray) {
        if (element < 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTaxes += element;
        }
    }

    // The taxes are 20% of each part's price you receive.
    let taxes = priceWithoutTaxes * 0.2;
    let totalPrice = priceWithoutTaxes + taxes;
    if (typeOfCustomer === 'special') {
        // If the customer is special, he has a 10% discount on the total price with taxes.
        totalPrice *= 0.9;
    }

    if (priceWithoutTaxes === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);