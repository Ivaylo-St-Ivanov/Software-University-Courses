function convertToObject(stringJSON) {

    let convertJSON = JSON.parse(stringJSON);
    let props = Object.keys(convertJSON);

    for (let key of props) {
        console.log(`${key}: ${convertJSON[key]}`);
    }
}
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');