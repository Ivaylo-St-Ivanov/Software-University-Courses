function accountBalance(input) {

    let index = 0;
    let element = input[index];

    let total = 0;

    while (element !== "NoMoreMoney") {
        element = Number(input[index]);
        if (element < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + element.toFixed(2));
        total += element;
        index++;
        element = input[index];
    }

    console.log("Total: " + total.toFixed(2));
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);