function adAstra(input) {

    let neededCaloriesPerDay = 2000;
    let pattern = /([|\|#])(?<item>[A-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let matches = pattern.exec(input[0]);
    let totalCalories = 0;
    let print = '';

    while (matches !== null) {
        let item = matches.groups['item'];
        let date = matches.groups['date'];
        let calories = matches.groups['calories'];
        totalCalories += Number(calories);
        print += `Item: ${item}, Best before: ${date}, Nutrition: ${calories}\n`;

        matches = pattern.exec(input[0]);
    }

    let days = Math.floor(totalCalories / neededCaloriesPerDay);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(print);
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);