function extract(content) {

    'use strict';
    const text = document.getElementById(content).textContent;
    const pattern = /\(.+?\)/gm;
    const matches = text.match(pattern);
    let result = '';

    for (const current of matches) {
        result += current.slice(1, -1) + '; ';
    }

    return result;
}