function nonDecreasingSubset(input) {

    let biggest = Number.MIN_SAFE_INTEGER;
    let collection = [];

    for (const current of input) {
        if (current >= biggest) {
            collection.push(current);
            biggest = current;
        }
    }

    console.log(collection.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);