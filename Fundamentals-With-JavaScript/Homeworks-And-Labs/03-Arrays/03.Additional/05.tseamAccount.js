function tseamAccount(input) {

    let inputCopy = input.slice(0);
    let account = inputCopy.shift().split(' ');
    let index = 0;
    let current = inputCopy[index++];

    while (current != 'Play!') {
        let [command, game] = current.split(' ');

        switch (command) {
            case 'Install':
                if (!account.includes(game)) {
                    account.push(game);
                }
                break;
            case 'Uninstall':
                if (account.includes(game)) {
                    let gameIndex = account.indexOf(game);
                    account.splice(gameIndex, 1);
                }
                break;
            case 'Update':
                if (account.includes(game)) {
                    let gameIndex = account.indexOf(game);
                    let update = account.splice(gameIndex, 1);
                    account.push(update[0]);
                }
                break;
            case 'Expansion':
                let gameTE = game.slice(0, (game.indexOf('-')));
                let indexToSeparator = game.indexOf('-') + 1;
                let expansion = game.slice(indexToSeparator, game.length);
                if (account.includes(gameTE)) {
                    let gameIndex = account.indexOf(gameTE) + 1;
                    account.splice(gameIndex, 0, `${gameTE}:${expansion}`);
                }
                break;
        }

        current = inputCopy[index++];
    }

    console.log(account.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);