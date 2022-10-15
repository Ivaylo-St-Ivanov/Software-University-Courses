function generateReport() {

    'use strict';
    const checkboxes = document.querySelectorAll('thead tr th input');
    const rows = document.querySelectorAll('tbody tr');
    const result = [];
    const rowsLength = rows.length;
    const checkboxesLength = checkboxes.length;

    for (let i = 0; i < rowsLength; i++) {
        const info = {};
        for (let j = 0; j < checkboxesLength; j++) {
            if (checkboxes[j].checked) {
                info[checkboxes[j].name] = rows[i].children[j].textContent;
            }
        }
        result.push(info);
    }

    document.getElementById('output').value = JSON.stringify(result);
}