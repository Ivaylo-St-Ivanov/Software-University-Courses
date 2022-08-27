function aMinerTask(input) {

    let resource = new Map();
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        if (resource.has(input[i]) === false) {
            resource.set(input[i], Number(input[i + 1]));
        } else {
            resource.set(input[i], resource.get(input[i]) + Number(input[i + 1]));
        }
    }

    let resourceAsArray = Array.from(resource);
    for (const [resource, quantity] of resourceAsArray) {
        console.log(`${resource} -> ${quantity}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);