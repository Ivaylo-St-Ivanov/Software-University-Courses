function fishland(input) {

    const musselsPrice = 7.50;

    const mackerelPrice = Number(input[0]);
    const spratPrice = Number(input[1]);
    const bonito = Number(input[2]);
    const horseMackerel = Number(input[3]);
    const mussels = Number(input[4]);

    const bonitoPrice = mackerelPrice * 1.6;
    const horseMackerelPrice = spratPrice * 1.8;

    const totalPrice = bonito * bonitoPrice + horseMackerel * horseMackerelPrice + mussels * musselsPrice;
    console.log(totalPrice.toFixed(2));
}
fishland(["5.55", "3.57", "4.3", "3.6", "7"]);