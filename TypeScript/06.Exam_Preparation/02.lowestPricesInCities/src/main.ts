type Price = {
    town: string,
    price: number
}

type Product = {
    name: string,
    lowestPrice: Price
}

type Output = {
    [product: string]: Product
}

function lowestPrice(data: string[]): void {

    const output: Output = {};

    for (const current of data) {
        const [town, product, priceStr] = current.split(' | ');
        const price = Number(priceStr);

        if (!output[product]) {
            output[product] = {
                name: product,
                lowestPrice: { town, price }
            };
        } else if (price < output[product].lowestPrice.price) {
            output[product].lowestPrice = { town, price };
        }
    }

    for (const product in output) {
        const info = output[product];
        const { name, lowestPrice } = info;
        console.log(`${name} -> ${lowestPrice.price} (${lowestPrice.town})`);
    }
}

lowestPrice(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);