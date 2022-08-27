function safePasswordsGenerator(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let capacity = Number(input[2]);

    let printline = '';
    let passCounter = 0;
    let isBreak = false;

    for (let i = 35; i <= 55; i++) {
        for (let j = 64; j <= 96; j++) {
            for (let x = 1; x <= a; x++) {
                for (let y = 1; y <= b; y++) {
                    printline += `${String.fromCharCode(i)}${String.fromCharCode(j)}${x}${y}${String.fromCharCode(j)}${String.fromCharCode(i)}|`;
                    passCounter++;
                    i++;
                    j++;
                    if (passCounter == capacity) {
                        break;
                    }
                    if (i > 55) {
                        i = 35;
                    }
                    if (j > 96) {
                        j = 64;
                    }
                }
                if (passCounter == capacity) {
                    break;
                }
                if (x == a) {
                    isBreak = true;
                    break;
                }
            }
            if (passCounter == capacity) {
                break;
            }
            if (isBreak) {
                break;
            }
        }
        if (passCounter == capacity) {
            break;
        }
        if (isBreak) {
            break;
        }
    }

    console.log(printline);
}
safePasswordsGenerator(['20', '50', '10']);