function addItem() {

    'use strict';
    const input = document.getElementById('newItemText');
    const newElementLi = document.createElement('li');
    newElementLi.textContent = input.value;
    document.getElementById('items').appendChild(newElementLi);
    input.value = '';
}