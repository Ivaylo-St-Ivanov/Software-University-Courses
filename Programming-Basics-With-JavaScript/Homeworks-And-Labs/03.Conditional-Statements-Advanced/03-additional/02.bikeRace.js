function bikeRace(input) {

    const juniorsTrailTax = 5.50;
    const juniorsCrossTax = 8.00;
    const juniorsDownhillTax = 12.25;
    const juniorsRoadTax = 20.00;
    const seniorsTrailTax = 7.00;
    const seniorsCrossTax = 9.50;
    const seniorsDownhillTax = 13.75;
    const seniorsRoadTax = 21.50;

    const juniorsCount = Number(input[0]);
    const seniorsCount = Number(input[1]);
    const route = input[2];

    let totalTax = 0;

    switch (route) {
        case "trail": totalTax = juniorsCount * juniorsTrailTax + seniorsCount * seniorsTrailTax; break;
        case "cross-country": totalTax = juniorsCount * juniorsCrossTax + seniorsCount * seniorsCrossTax;
            // Ако в "cross-country" състезанието се съберат 50 или повече участника(общо младши и старши), таксата намалява с 25%.
            if (juniorsCount + seniorsCount >= 50) {
                totalTax *= 0.75;
            }
            break;
        case "downhill": totalTax = juniorsCount * juniorsDownhillTax + seniorsCount * seniorsDownhillTax; break;
        case "road": totalTax = juniorsCount * juniorsRoadTax + seniorsCount * seniorsRoadTax; break;
    }

    //  Организаторите отделят 5% процента от събраната сума за разходи.
    totalTax *= 0.95;

    console.log(totalTax.toFixed(2));
}
bikeRace(["3", "40", "road"]);