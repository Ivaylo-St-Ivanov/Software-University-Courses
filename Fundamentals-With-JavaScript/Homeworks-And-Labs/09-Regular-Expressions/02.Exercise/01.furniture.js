function furniture(input) {

    let pattern = />>(?<furniture>[A-Z]+[a-z]+|[A-Z]+)<<(?<price>\d+.\d+|\d+)!(?<quantity>\d+)/gm;
    let matches = pattern.exec(input);
    let validFurniture = [];
    let totalSum = 0;

    while (matches !== null) {
        let furniture = matches.groups['furniture'];
        validFurniture.push(furniture);
        let price = matches.groups['price'];
        let quantity = matches.groups['quantity'];
        totalSum += price * quantity;

        matches = pattern.exec(input);
    }

    if (validFurniture.length === 0) {
        console.log('Bought furniture:');
    } else {
        console.log(`Bought furniture:\n${validFurniture.join('\n')}`);
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);