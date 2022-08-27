function trainingLab(input) {

    const w = Number(input[0]);
    const h = Number(input[1]);

    const columns = Math.floor(w * 100 / 120);
    const rows = Math.floor((h * 100 - 100) / 70);
    const seatPlaces = columns * rows - 3;
    console.log(seatPlaces);
}
trainingLab(["15", "8.9"]);