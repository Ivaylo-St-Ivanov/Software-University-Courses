function calorieObject(input) {

    'use strict';
    const calories = {};
    const inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        calories[input[i]] = +input[i + 1];
    }

    console.log(calories);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);