function deleteByEmail() {

    'use strict';
    const input = document.getElementsByName('email')[0];
    const table = [...document.querySelectorAll('tbody tr')];
    const result = document.getElementById('result');
    result.textContent = '';

    for (const current of table) {
        if (current.children[1].textContent == input.value) {
            current.remove();
            result.textContent = 'Deleted.';
        }
    }

    if (result.textContent == '') {
        result.textContent = 'Not found.';
    }
    input.value = '';
}