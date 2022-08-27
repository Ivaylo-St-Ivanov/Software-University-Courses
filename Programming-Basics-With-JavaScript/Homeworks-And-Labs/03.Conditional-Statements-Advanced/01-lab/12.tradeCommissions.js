function tradeCommissions(input) {

    const town = input[0];
    const sales = Number(input[1]);

    let tradeCommissions = 0;

    if (town === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            tradeCommissions = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            tradeCommissions = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            tradeCommissions = sales * 0.08;
        } else if (sales > 10000) {
            tradeCommissions = sales * 0.12;
        } else {
            console.log("error");
        }
    } else if (town === "Varna") {
        if (sales >= 0 && sales <= 500) {
            tradeCommissions = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            tradeCommissions = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            tradeCommissions = sales * 0.10;
        } else if (sales > 10000) {
            tradeCommissions = sales * 0.13;
        } else {
            console.log("error");
        }
    } else if (town === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            tradeCommissions = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            tradeCommissions = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            tradeCommissions = sales * 0.12;
        } else if (sales > 10000) {
            tradeCommissions = sales * 0.145;
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }

    if (tradeCommissions !== 0) {
        console.log(tradeCommissions.toFixed(2));
    }
}
tradeCommissions(["Kaspichan", "1500"]);
