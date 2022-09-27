function sumTable() {

    'use script';
    const rows = [...document.querySelectorAll('tbody tr')];
    const rowsLength = rows.length;
    let sum = 0;

    for (let i = 1; i < rowsLength - 1; i++) {
        sum += Number(rows[i].lastElementChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
}