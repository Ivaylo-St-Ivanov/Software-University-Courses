function arrayManipulator(array1, array2) {

    let array1Copy = array1.slice(0);
    let array2Copy = array2.slice(0);
    let index = 0;
    let current = array2Copy[index++];

    while (current !== 'print') {
        current = current.split(' ');
        let currentCommand = current[0];
        switch (currentCommand) {
            case 'add':
                let indexToAdd = current[1];
                let elementToAdd = +current[2];
                array1Copy.splice(indexToAdd, 0, elementToAdd);
                break;
            case 'addMany':
                let indexToAddMany = current[1];
                for (let i = current.length; i > 2; i--) {
                    let currentElement = +current.pop();
                    array1Copy.splice(indexToAddMany, 0, currentElement);
                }
                break;
            case 'contains':
                let elementToSearch = +current[1];
                console.log(array1Copy.indexOf(elementToSearch));
                break;
            case 'remove':
                let indexToRemove = current[1];
                array1Copy.splice(indexToRemove, 1);
                break;
            case 'shift':
                let positions = current[1];
                for (let i = 1; i <= positions; i++) {
                    let shifted = array1Copy.shift();
                    array1Copy.push(shifted);
                }
                break;
            case 'sumPairs':
                let sumPairs = 0;
                let sumPairsArray = [];
                for (let i = 0; i < array1Copy.length; i += 2) {
                    if (i === array1Copy.length - 1) {
                        sumPairsArray.push(array1Copy[i]);
                    } else {
                        sumPairs = array1Copy[i] + array1Copy[i + 1];
                        sumPairsArray.push(sumPairs);
                    }
                }
                array1Copy = sumPairsArray;
                break;
        }

        current = array2Copy[index++];
    }

    let printLine = array1Copy.join(', ');
    console.log(`[ ${printLine} ]`);
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);