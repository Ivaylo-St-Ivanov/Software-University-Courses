function addItem() {

    'use strict';
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const dropdownMenu = document.getElementById('menu');

    const newOption = document.createElement('option');
    newOption.textContent = inputText.value;
    newOption.value = inputValue.value;
    dropdownMenu.appendChild(newOption);

    inputText.value = '';
    inputValue.value = '';
}