function cookingByNumbers(startingPoints, ...params) {

    //'use strict';
    let result = +startingPoints;

    for (const current of params) {
        switch (current) {
            // • chop - divide the number by two
            case 'chop': result /= 2; break;
            // • dice - square root of a number
            case 'dice': result = Math.sqrt(result); break;
            // • spice - add 1 to the number
            case 'spice': result += 1; break;
            // • bake - multiply number by 3
            case 'bake': result *= 3; break;
            // • fillet - subtract 20% from the number
            case 'fillet': result *= 0.8; break;
        }

        console.log(result);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');