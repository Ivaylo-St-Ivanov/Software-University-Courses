function login(input) {

    const username = input[0];
    let index = 1;
    let printLine = '';

    for (let i = 0; i < username.length; i++) {
        let currentChar = username[i];
        printLine = currentChar + printLine;
    }
    let pass = printLine;
    
    let currentTry = input[index++];
    let counter = 0;

    while (currentTry !== pass) {
        counter++;
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log('Incorrect password. Try again.');

        currentTry = input[index++];
    }
    
    if (currentTry === pass) {
        console.log(`User ${username} logged in.`);
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);