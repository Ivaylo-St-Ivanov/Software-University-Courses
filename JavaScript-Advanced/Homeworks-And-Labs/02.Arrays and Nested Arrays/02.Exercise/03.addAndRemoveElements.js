function addAndRemoveElements(array) {

    'use strict';
    let result = [];
    let initialNum = 1;

    for (const command of array) {
        switch (command) {
            case 'add': result.push(initialNum); break;
            case 'remove': result.pop(); break;
        }
        initialNum++;
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['remove',
    'remove',
    'remove']);