function sortAnArrayBy2Criteria(array) {

    'use strict';
    let sorted = array.sort((a, b) => {
        if (a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(sorted.join('\n'));
}
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']);