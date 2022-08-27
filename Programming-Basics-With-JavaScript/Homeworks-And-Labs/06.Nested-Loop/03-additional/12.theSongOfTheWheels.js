function theSongOfTheWheels(input) {

    let controlValue = Number(input[0]);

    let combinations = '';
    let counter = 0;
    let pass = '';

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d && a * b + c * d == controlValue) {
                        combinations += `${a}${b}${c}${d} `;
                        counter++;
                        if (counter == 4) {
                            pass += `${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }

    if (combinations.length > 0) {
        console.log(combinations);
    }
    if (pass.length > 0) {
        console.log(`Password: ${pass}`);
    } else {
        console.log('No!');
    }
}
theSongOfTheWheels(['55']);