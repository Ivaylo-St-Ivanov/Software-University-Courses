function cinema(input) {

    const premierePrice = 12.00;
    const normalPrice = 7.50;
    const discountPrice = 5.00;

    const projection = input[0];
    const rowCount = Number(input[1]);
    const columnCount = Number(input[2]);

    const seatCount = rowCount * columnCount;
    let income = 0;

    switch (projection) {
        case "Premiere": income = seatCount * premierePrice; break;
        case "Normal": income = seatCount * normalPrice; break;
        case "Discount": income = seatCount * discountPrice; break;
    }

    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"]);