function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    // • Every second lost game, his helmet is broken.
    let brokenHelmet = Math.floor(lostFights / 2);
    // • Every third lost game, his sword is broken.
    let brokenSword = Math.floor(lostFights / 3);
    // • When both his sword and helmet are broken in the same lost fight, his shield also breaks.
    let brokenShield = Math.floor(lostFights / 6);
    // • Every second time, when his shield brakes, his armor also needs to be repaired.
    let brokenArmor = Math.floor(brokenShield / 2);
    let totalExpenses = brokenHelmet * helmetPrice + brokenSword * swordPrice + brokenShield * shieldPrice + brokenArmor * armorPrice;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);