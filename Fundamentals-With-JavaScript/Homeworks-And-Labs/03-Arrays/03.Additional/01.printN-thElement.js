function printNthElement(input) {

    let inputCopy = input.slice(0);
    let nthStep = +inputCopy.pop();
    let collection = [];
    let inputCopyLength = inputCopy.length;

    for (let i = 0; i < inputCopyLength; i += nthStep) {
        collection.push(inputCopy[i]);
    }

    console.log(collection.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2']);