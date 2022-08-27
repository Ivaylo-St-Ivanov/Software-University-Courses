function lunchBreak(input) {

    const series = input[0];
    const durationEpisode = Number(input[1]);
    const durationRest = Number(input[2]);

    const lunchTime = durationRest / 8;
    const relaxationTime = durationRest / 4;

    const freeTime = durationRest - lunchTime - relaxationTime;
    const difference = Math.abs(freeTime - durationEpisode);

    if (freeTime >= durationEpisode) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(difference)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(difference)} more minutes.`);
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);