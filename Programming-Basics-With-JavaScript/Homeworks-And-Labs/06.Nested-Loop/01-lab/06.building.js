function building(input) {

    const floorsCount = Number(input[0]);
    const roomsCountPerFloor = Number(input[1]);

    for (let f = floorsCount; f >= 1; f--) {
        let printLine = "";
        for (let r = 0; r < roomsCountPerFloor; r++) {
            if (f === floorsCount) {
                printLine += `L${f}${r} `;
            } else if (f % 2 !== 0) {
                printLine += `A${f}${r} `;
            } else {
                printLine += `O${f}${r} `;
            }
        }
        console.log(printLine);
    }
}
building(["9", "5"]);