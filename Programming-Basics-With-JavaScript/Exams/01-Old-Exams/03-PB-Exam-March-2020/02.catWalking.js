function catWalking(input) {

    const minutesPerWalking = Number(input[0]);
    const walkingCountPerDay = Number(input[1]);
    const caloricIntakePerDay = Number(input[2]);

    const totalMinutesWalking = minutesPerWalking * walkingCountPerDay;
    // За всяка минута от разходката, котката гори по 5 калории.
    const burnedCaloriesPerMinute = 5;
    const totalCaloriesBurned = totalMinutesWalking * burnedCaloriesPerMinute;
    
    // Разходката е достатъчна, ако котката изграря 50% от приетите калории.
    if (caloricIntakePerDay * 0.5 <= totalCaloriesBurned) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`);
    }
}
catWalking(["30", "3", "600"]);