function arrayManipulations(array) {

    let arrayToManipulated = array[0].split(' ');

    for (let i = 1; i < array.length; i++) {
        let currentCommandArray = array[i].split(' ');
        let currentCommand = currentCommandArray[0];
        let num1 = Number(currentCommandArray[1]);
        let num2 = Number(currentCommandArray[2]);
        switch (currentCommand) {
            case 'Add': arrayToManipulated.push(num1); break;
            case 'Remove': num1 = String(num1);
            arrayToManipulated = arrayToManipulated.filter(x => x !== num1); break;
            case 'RemoveAt': arrayToManipulated.splice(num1, 1); break;
            case 'Insert': arrayToManipulated.splice(num2, 0, num1); break;
        }
    }
    
    console.log(arrayToManipulated.join(' '));
}
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);