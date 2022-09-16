function pieceOfPie(array, start, end) {

    'use strict';
    const startIndex = array.indexOf(start);
    const endIndex = array.indexOf(end) + 1;

    return array.slice(startIndex, endIndex);
}
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));