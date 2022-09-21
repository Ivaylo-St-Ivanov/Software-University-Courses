function townsToJSON(input) {

    'use strict';
    let inputCopy = input.slice();

    let keys = inputCopy.shift();
    keys = keys.slice(2, keys.length - 2).split(' | ');
    const town = keys[0];
    const latitude = keys[1];
    const longitude = keys[2];
    const result = [];

    for (let current of inputCopy) {
        const cityInfo = {};
        current = current.slice(2, current.length - 2);
        const [city, parallel, meridian] = current.split(' | ');
        cityInfo[town] = city;
        cityInfo[latitude] = +Number(parallel).toFixed(2);
        cityInfo[longitude] = +Number(meridian).toFixed(2);

        result.push(cityInfo);
    }
    
    const jsonString = JSON.stringify(result);
    console.log(jsonString);
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);