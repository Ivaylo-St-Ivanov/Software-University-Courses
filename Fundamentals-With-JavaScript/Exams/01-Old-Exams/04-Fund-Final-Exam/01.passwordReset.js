function passwordReset(input) {

    // let inputCopy = input.slice(0);
    // let initialString = inputCopy.shift();
    // let index = 0;
    // let current = inputCopy[index++];
    // let newRawPass = initialString;

    // while (current !== 'Done') {
    //     let currentInfo = current.split(' ');
    //     let command = currentInfo[0];
    //     switch (command) {
    //         case 'TakeOdd':
    //             let newRawPassLength = newRawPass.length;
    //             let result = '';
    //             for (let i = 1; i < newRawPassLength; i += 2) {
    //                 result += newRawPass[i];
    //             }
    //             newRawPass = result;
    //             console.log(newRawPass);
    //             break;
    //         case 'Cut':
    //             let cutIndex = Number(currentInfo[1]);
    //             let lengthToRomove = Number(currentInfo[2]);
    //             let partToRemove = newRawPass.slice(cutIndex, cutIndex + lengthToRomove);
    //             newRawPass = newRawPass.replace(partToRemove, '');
    //             console.log(newRawPass);
    //             break;
    //         case 'Substitute':
    //             let substring = currentInfo[1];
    //             let substitute = currentInfo[2];
    //             if (newRawPass.includes(substring)) {
    //                 newRawPass = newRawPass.replace(new RegExp(substring, 'g'), substitute);
    //                 console.log(newRawPass);
    //             } else {
    //                 console.log('Nothing to replace!');
    //             }
    //             break;
    //     }

    //     current = inputCopy[index++];
    // }

    // console.log(`Your password is: ${newRawPass}`);

    let inputCopy = input.slice(0);
    let res = inputCopy.shift();

    let commands = {
        'TakeOdd': (pass) => {
            return [...pass]
                .filter((char, index) => { return index % 2 !== 0 })
                .join('');
        },
        'Cut': (pass, index, length) => {
            index = Number(index);
            length = Number(length);
            let partToRemove = pass.slice(index, index + length);
            return pass.replace(partToRemove, '');
        },
        'Substitute': (pass, substring, substitute) => {
            if (res.includes(substring)) {
                return pass.replace(new RegExp(substring, 'g'), substitute);
            } else {
                console.log('Nothing to replace!');
                return res;
            }
        }
    }

    inputCopy.forEach(line => {
        if (line !== 'Done') {
            let [command, ...tokens] = line.split(' ');
            let old = res;
            res = commands[command](res, ...tokens);
            if (old !== res) {
                console.log(res);
            }
        }
    });

    console.log(`Your password is: ${res}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);