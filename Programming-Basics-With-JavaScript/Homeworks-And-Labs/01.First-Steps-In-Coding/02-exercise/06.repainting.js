function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.5;
    let paintPrice = paint * 1.1 * 14.5;
    let thinnerPrice = thinner * 5;
    let materialsCosts = nylonPrice + paintPrice + thinnerPrice + 0.4;
    let payment = materialsCosts * 0.3 * hours;
    let totalSum = materialsCosts + payment;

    console.log(totalSum);
}
repainting(["10", "11", "4", "8"]);