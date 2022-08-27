function numbers(sequence) {

    let sequenceArray = sequence.split(' ').map(Number);
    let arrayValue = 0;
    let countElement = 0;

    for (let element of sequenceArray) {
        countElement++;
        arrayValue += element;
    }
    let averageValue = arrayValue / countElement;
    let sequenceArrayInDescendingOrder = sequenceArray.sort((a, b) => b-a);
    let top5Element = sequenceArrayInDescendingOrder.splice(0, 5);
    let result = [];
    let isResult = false;

    for (let current of top5Element) {
        if (current > averageValue) {
            result.push(current);
            isResult = true;
        }
    }

    if (!isResult) {
        console.log('No');
    } else {
        console.log(result.join(' '));
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');