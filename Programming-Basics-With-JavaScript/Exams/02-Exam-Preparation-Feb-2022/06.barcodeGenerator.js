function barcodeGenerator(input) {

    const firstBarcode = "" + input[0];
    const lastBarcode = "" + input[1];

    let firstBarcodeA = Number(firstBarcode[0]);
    let firstBarcodeB = Number(firstBarcode[1]);
    let firstBarcodeC = Number(firstBarcode[2]);
    let firstBarcodeD = Number(firstBarcode[3]);

    let lastBarcodeA = Number(lastBarcode[0]);
    let lastBarcodeB = Number(lastBarcode[1]);
    let lastBarcodeC = Number(lastBarcode[2]);
    let lastBarcodeD = Number(lastBarcode[3]);
    let printLine = "";

    for (let a = firstBarcodeA; a <= lastBarcodeA; a++) {
        for (let b = firstBarcodeB; b <= lastBarcodeB; b++) {
            for (let c = firstBarcodeC; c <= lastBarcodeC; c++) {
                for (let d = firstBarcodeD; d <= lastBarcodeD; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        printLine += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }

    console.log(printLine);
}
barcodeGenerator(["2345", "6789"]);