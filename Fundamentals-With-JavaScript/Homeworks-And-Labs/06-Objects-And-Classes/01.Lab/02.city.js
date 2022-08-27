function city(cityInfo) {

    let info = Object.keys(cityInfo);
    for (let key of info) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});