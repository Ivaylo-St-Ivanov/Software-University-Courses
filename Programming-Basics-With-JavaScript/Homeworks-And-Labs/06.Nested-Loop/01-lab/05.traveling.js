function traveling(input) {

    let index = 0;
    let curent = input[index++];

    let destination = "";
    let savings = 0;

    while (curent !== "End") {
        destination = curent;
        let budget = Number(input[index++]);
        while (savings <= budget) {
            let curentSum = Number(input[index++]);
            savings += curentSum;
            if (savings >= budget) {
                console.log(`Going to ${destination}!`);
                savings = 0;
                break;
            }
        }

        curent = input[index++];
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);