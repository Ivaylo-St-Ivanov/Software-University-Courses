function argumentInfo(...input) {

    // 'use strict';
    const counters = {};

    for (const current of input) {
        const type = typeof current;
        console.log(`${type}: ${current}`);

        if (!counters.hasOwnProperty(type)) {
            counters[type] = 0;
        }
        counters[type]++;
    }

    Object.entries(counters).sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[0]} = ${el[1]}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });