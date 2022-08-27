function fancyBarcodes(input) {

    let inputCopy = input.slice(0);
    let countOfBarcodes = Number(inputCopy.shift());
    let pattern = /@#+[A-Z]([A-Za-z0-9]{4,})[A-Z]@#+/g;

    for (let i = 0; i < countOfBarcodes; i++) {
        let match = pattern.exec(inputCopy[i]);
        let groups = '';
        let isValid = false;
        while (match !== null) {
            isValid = true;
            for (const char of match[1]) {
                if (!isNaN(Number(char))) {
                    groups += char;
                }
            }

            match = pattern.exec(inputCopy[i]);
        }

        if (isValid) {
            if (groups === '') {
                groups = '00';
            }
            console.log(`Product group: ${groups}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);