function truckDriver(input) {

    const payPerKmForSpringAutumnUnder5000km = 0.75;
    const payPerKmForSummerUnder5000Km = 0.90;
    const payPerKmForWinterUnder5000Km = 1.05;
    const payPerKmForSpringAutumnUnder10000km = 0.95;
    const payPerKmForSummerUnder10000Km = 1.10;
    const payPerKmForWinterUnder10000Km = 1.25;
    const payPerKmAllSeasonUnder20000Km = 1.45;
    // Един сезон е 4 месеца.
    const workSeason = 4;

    const season = input[0];
    const kmPerMonth = Number(input[1]);

    let salary = kmPerMonth * workSeason;

    if (kmPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn": salary *= payPerKmForSpringAutumnUnder5000km; break;
            case "Summer": salary *= payPerKmForSummerUnder5000Km; break;
            case "Winter": salary *= payPerKmForWinterUnder5000Km; break;
        }
    } else if (kmPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn": salary *= payPerKmForSpringAutumnUnder10000km; break;
            case "Summer": salary *= payPerKmForSummerUnder10000Km; break;
            case "Winter": salary *= payPerKmForWinterUnder10000Km; break;
        }
    } else if (kmPerMonth <= 20000) {
        salary *= payPerKmAllSeasonUnder20000Km;
    }

    // След като са извадени 10% за данъци се отпечатват останалите пари.
    salary *= 0.9;
    console.log(salary.toFixed(2));
}
truckDriver(["Spring", "16942"]);