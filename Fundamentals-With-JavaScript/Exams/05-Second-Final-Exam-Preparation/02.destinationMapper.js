function destinationMapper(input) {

    let pattern = /([=|/])[A-Z]([A-z]{2,})\1/g;
    let matches = input.match(pattern);
    let map = [];
    let travelPoints = 0;

    if (matches) {
        for (const current of matches) {
            let destination = current.slice(1, current.length - 1);
            map.push(destination);
            let currentTravelPoints = Number(destination.length);
            travelPoints += currentTravelPoints;
        }
    }

    console.log(`Destinations: ${map.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");