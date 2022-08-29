function rotateArray(input) {

    let inputCopy = input.slice(0);
    let rotationsCount = inputCopy.pop();

    for (let i = 0; i < rotationsCount; i++) {
        let current = inputCopy.pop();
        inputCopy.unshift(current);
    }

    console.log(inputCopy.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);