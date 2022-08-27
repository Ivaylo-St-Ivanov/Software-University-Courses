function inventory(input) {

    let inputCopy = input.slice(0);
    let heroList = [];

    inputCopy.forEach(element => {
        let [name, level, items] = element.split(' / ');

        let currentHero = {
            name,
            level : +level,
            items
        }
        heroList.push(currentHero);
    });
    let sortedByLevel = heroList.sort((a, b) => a.level - b.level);

    sortedByLevel.forEach(element => {
        console.log(`Hero: ${element.name}\nlevel => ${element.level}\nitems => ${element.items}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);