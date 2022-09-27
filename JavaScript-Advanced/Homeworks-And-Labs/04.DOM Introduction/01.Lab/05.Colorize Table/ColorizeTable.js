function colorize() {

    'use strict';
    Array.from(document.querySelectorAll('table tr:nth-child(2n)')).forEach(e => e.style.background = 'teal');
}