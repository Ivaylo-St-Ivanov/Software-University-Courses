function addItem() {

    'use strict';
    const input = document.getElementById('newItemText');
    const newElementLi = document.createElement('li');
    newElementLi.textContent = input.value;
    document.getElementById('items').appendChild(newElementLi);
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    newElementLi.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete);
    input.value = '';
    
    function onDelete(event) {
        event.target.parentElement.remove();
    }
}
