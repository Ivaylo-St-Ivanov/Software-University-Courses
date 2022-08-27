function worldTour(input) {

    inputCopy = input.slice(0);
    let stops = inputCopy.shift();
    let index = 0;
    let current = inputCopy[index++];

    while (current !== 'Travel') {
        let currentCommand = current.split(':');
        switch (currentCommand[0]) {
            case "Add Stop":
                let indexToAdd = Number(currentCommand[1]);
                let stringToAdd = currentCommand[2];
                if (indexToAdd >= 0 && indexToAdd < stops.length) {
                    let addStop = stops.slice(0, indexToAdd).concat(stringToAdd);
                    let afterAdd = stops.slice(indexToAdd, stops.length);
                    stops = addStop + afterAdd;
                }
                console.log(stops);
                break;
            case "Remove Stop":
                let startIndex = Number(currentCommand[1]);
                let endIndex = Number(currentCommand[2]);
                if (startIndex >= 0 && endIndex < stops.length) {
                    let firstPart = stops.slice(0, startIndex);
                    let secondPart = stops.slice(endIndex + 1, stops.length);
                    stops = firstPart + secondPart;
                }
                console.log(stops);
                break;
            case "Switch":
                let oldString = currentCommand[1];
                let newString = currentCommand[2];
                if (stops.includes(oldString)) {
                    stops = stops.replace(oldString, newString);
                }
                console.log(stops);
                break;
        }

        current = inputCopy[index++];
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);