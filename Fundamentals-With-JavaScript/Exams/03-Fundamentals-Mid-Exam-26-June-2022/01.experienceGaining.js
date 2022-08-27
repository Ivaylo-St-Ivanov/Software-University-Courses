function experienceGaining(data) {

    let dataCopy = data.slice(0);
    let neededExperience = +dataCopy.shift();
    let countOfBattles = +dataCopy.shift();
    let currentExperience = 0;
    let currentBattleCount = 0;

    for (let i = 0; i < countOfBattles; i++) {
        currentBattleCount++;
        currentExperience += Number(dataCopy[i]);
        if (i === 0) {
            if (currentExperience >= neededExperience) {
                console.log(`Player successfully collected his needed experience for ${currentBattleCount} battles.`);
                return;
            }
            continue;
        } else if ((i + 1) % 15 === 0) {
            currentExperience += Number(dataCopy[i]) * 0.05;
        } else if ((i + 1) % 5 === 0) {
            currentExperience -= Number(dataCopy[i]) * 0.10;
        } else if ((i + 1) % 3 === 0) {
            currentExperience += Number(dataCopy[i]) * 0.15;
        }
        if (currentExperience >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${currentBattleCount} battles.`);
            return;
        }
    }

    let difference = Math.abs(neededExperience - currentExperience).toFixed(2);
    console.log(`Player was not able to collect the needed experience, ${difference} more needed.`);
}
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20]);