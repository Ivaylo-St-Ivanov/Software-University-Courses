function extractText() {

    'use strict';
    let collection = document.getElementsByTagName('li');
    collection = Array.from(collection);
    let result = '';
    for (const item of collection) {
        result += item.textContent + '\n';
    }
    document.getElementById('result').value = result;
}