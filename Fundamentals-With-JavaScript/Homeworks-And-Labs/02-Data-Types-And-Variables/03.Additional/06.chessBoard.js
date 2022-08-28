function chessBoard(num) {

    let current = 'black';
    console.log('<div class="chessboard">');

    for (let i = 0; i < num; i++) {

        console.log('  <div>');
        for (let j = 0; j < num; j++) {
            if (current == 'black') {
                console.log(`    <span class="${current}"></span>`);
                current = 'white';
            } else {
                console.log(`    <span class="${current}"></span>`);
                current = 'black';
            }
        }
        console.log('  </div>');
        if (num % 2 == 0) {
            if (current == 'black') {
                current = 'white';
            } else {
                current = 'black';
            }
        }
    }
    console.log('</div>');
}
chessBoard(3);