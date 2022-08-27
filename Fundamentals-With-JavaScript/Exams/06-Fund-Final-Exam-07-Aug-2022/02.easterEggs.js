function easterEggs(input) {

    let text = input[0];
    let regexp = /[@#]{1,}(?<color>[a-z]{3,})[@#]{1,}[*$\/%^&!?)(-+=`~|<>,."';:}{]*(\/{1,})(?<amount>\d*)(\/{1,})/gm;
    let matches = regexp.exec(input);

    while (matches) {
        let amount = matches.groups.amount;
        let color = matches.groups.color;

        console.log(`You found ${amount} ${color} eggs!`);
        matches = regexp.exec(input);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);