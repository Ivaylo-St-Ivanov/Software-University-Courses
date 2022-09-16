function evenPositionElements(array) {

    'use strict';
    const result = [];
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i += 2) {
        result.push(array[i]);
    }

    console.log(result.join(' '));
}
evenPositionElements(['20', '30', '40', '50', '60']);