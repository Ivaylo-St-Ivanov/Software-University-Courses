function wordsUppercase(text) {

    'use strict';
    return text.match(/\w+/g).join(', ').toUpperCase();
}
console.log(wordsUppercase('Hi, how are you?'));