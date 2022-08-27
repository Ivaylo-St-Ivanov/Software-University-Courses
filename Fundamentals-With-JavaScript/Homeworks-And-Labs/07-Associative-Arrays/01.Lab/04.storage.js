function storage(data) {

    let storageMap = new Map();

    for (const current of data) {
        let [product, quantity] = current.split(' ');
        if (storageMap.has(product)) {
            let currentQuantity = storageMap.get(product);
            storageMap.set(product, (Number(quantity) + Number(currentQuantity)));
        } else {
            storageMap.set(product, quantity);
        }
    }

    for (let [product, quantity] of storageMap.entries()) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);