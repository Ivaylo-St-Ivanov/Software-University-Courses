function squareOfStars(num) {

    'use strict';
    let print = '';

    if (typeof num != 'undefined') {
        for (let i = 0; i < num; i++) {
            let printLine = '';
            for (let j = 0; j < num; j++) {
                printLine += '* ';
            }
            print += printLine + '\n';
        }
    } else {
        for (let i = 0; i < 5; i++) {
            print += '* * * * *' + '\n';
        }
    }

    console.log(print);
}
squareOfStars(3);