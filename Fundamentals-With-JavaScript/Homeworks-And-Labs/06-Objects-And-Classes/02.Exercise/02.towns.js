function towns(input) {

    for (let current of input) {
        let currentTown = current.split(' | ');
        let currentTownObject = {};
        currentTownObject.town = currentTown[0];
        currentTownObject.latitude = Number(currentTown[1]).toFixed(2);
        currentTownObject.longitude = Number(currentTown[2]).toFixed(2);

        console.log(currentTownObject);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);