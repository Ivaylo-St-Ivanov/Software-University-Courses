function travelAgency(input) {

    const town = input[0];
    const packet = input[1];
    const vipDiscount = input[2];
    const stayDays = Number(input[3]);

    const banskoBorovetsWithEquipmentPerDayPrice = 100;
    const banskoBorovetsNoEquipmentPerDayPrice = 80;
    const varnaBurgasWithBreakfastPerDayPrice = 130;
    const varnaBurgasNoBreakfastPerDayPrice = 100;
    const banskoBorovetsWithEquipmenVipDiscount = 0.1;     // 10%
    const banskoBorovetsNoEquipmentVipDiscount = 0.05;     // 5%
    const varnaBurgasWithBreakfastVipDiscount = 0.12;      // 12%
    const varnaBurgasNoBreakfastVipDiscount = 0.07;        // 7%

    let price = 0;
    let isCorrectData = true;

    switch (town) {
        case "Bansko":
        case "Borovets":
            switch (packet) {
                case "noEquipment": price = banskoBorovetsNoEquipmentPerDayPrice;
                    if (vipDiscount === "yes") {
                        price -= price * banskoBorovetsNoEquipmentVipDiscount;
                    }
                    break;
                case "withEquipment": price = banskoBorovetsWithEquipmentPerDayPrice;
                    if (vipDiscount === "yes") {
                        price -= price * banskoBorovetsWithEquipmenVipDiscount;
                    }
                    break;
                default: console.log("Invalid input!");
                isCorrectData = false;
                break;
            }
            break;
        case "Varna":
        case "Burgas":
            switch (packet) {
                case "noBreakfast": price = varnaBurgasNoBreakfastPerDayPrice;
                    if (vipDiscount === "yes") {
                        price -= price * varnaBurgasNoBreakfastVipDiscount;
                    }
                    break;
                case "withBreakfast": price = varnaBurgasWithBreakfastPerDayPrice;
                    if (vipDiscount === "yes") {
                        price -= price * varnaBurgasWithBreakfastVipDiscount;
                    }
                    break;
                default: console.log("Invalid input!");
                isCorrectData = false;
                break;
            }
            break;
        default: console.log("Invalid input!");
        isCorrectData = false;
        break;
    }

    // Ако клиентът е заявил престой повече от 7 дни, получава единия ден безплатно.
    if (stayDays > 7) {
        price = (stayDays - 1) * price;
    } else if (stayDays > 0) {
        price = stayDays * price;
    } else {
        console.log("Days must be positive number!");
        isCorrectData = false;
    }

    if (isCorrectData) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(["Borovets",
    "noEquipment",
    "yes",
    "6"]);