function ticTacToe(array) {

    'use strict';
    let dashboard = [['false', 'false', 'false'],
                     ['false', 'false', 'false'],
                     ['false', 'false', 'false']];
    const firstPlayer = 'X';
    const secondPlayer = 'O';
    let currentPlayer = firstPlayer;
    const arrayLength = array.length;
    const dashboardLength = dashboard.length;
    let winner;
    let marks = 0;

    for (let i = 0; i < arrayLength; i++) {
        let currentMoves = array[i];
        if (marks == 9) {
            break;
        }
        
        if (dashboard[Number(currentMoves[0])][Number(currentMoves[2])] == 'false') {
            dashboard[Number(currentMoves[0])][Number(currentMoves[2])] = currentPlayer;
            marks++;
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        for (let i = 0; i < dashboardLength; i++) {
            let rowSum = '';
            let columnSum = '';
            for (let j = 0; j < dashboardLength; j++) {
                rowSum += dashboard[i][j];
                columnSum += dashboard[j][i];
            }
            if (rowSum == 'XXX' || rowSum == 'OOO' || columnSum == "XXX" || columnSum == 'OOO') {
                winner = currentPlayer;
                break;
            }
        }
        if (winner != undefined) {
            break;
        }

        let diagonal1 = '';
        let diagonal2 = '';
        let j = dashboardLength - 1;
        let row = 0;
        for (let i = 0; i < dashboardLength; i++, j--) {
            diagonal1 += dashboard[row][i];
            diagonal2 += dashboard[row][j];
            row++;
        }
        if (diagonal1 == 'XXX' || diagonal1 == 'OOO' || diagonal2 == "XXX" || diagonal2 == 'OOO') {
            winner = currentPlayer;
            break;
        }

        if (currentPlayer == firstPlayer) {
            currentPlayer = secondPlayer;
        } else {
            currentPlayer = firstPlayer;
        }
    }

    if (winner) {
        console.log(`Player ${winner} wins!`);
        for (const array of dashboard) {
            console.log(array.join('\t'));
        }
    } else {
        console.log('The game ended! Nobody wins :(');
        for (const array of dashboard) {
            console.log(array.join('\t'));
        }
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);