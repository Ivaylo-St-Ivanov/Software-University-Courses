function petShop(input) {

    let dogsPackeges = Number(input[0]);
    let catsPackeges = Number(input[1]);

    let dogsPackegesPrice = dogsPackeges * 2.5;
    let catsPackegesPrice = catsPackeges * 4;
    let totalSum = dogsPackegesPrice + catsPackegesPrice;

    console.log(`${totalSum} lv.`);

}
petShop(["13", "9"]);