function storeProvision(currentStock, orderedProducts) {

    let currentStockLength = currentStock.length;
    let orderedProductsLength = orderedProducts.length;
    let store = {};

    for (let i = 0; i < currentStockLength; i += 2) {
        let currentProduct = currentStock[i];
        store[currentProduct] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderedProductsLength; i += 2) {
        let currentProduct = orderedProducts[i];
        if (!store.hasOwnProperty(currentProduct)) {
            store[currentProduct] = 0;
        }
        store[currentProduct] += Number(orderedProducts[i + 1]);
    }

    for (let product of Object.keys(store)) {
        console.log(`${product} -> ${store[product]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);