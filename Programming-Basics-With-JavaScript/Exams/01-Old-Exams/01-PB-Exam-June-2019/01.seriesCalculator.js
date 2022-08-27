function seriesCalculator(input) {

    const seriesName = input[0];
    const seasonsCount = Number(input[1]);
    const episodesCount = Number(input[2]);
    const episodeDuration = Number(input[3]);

    // Във всеки епизод има реклами, които са с продължителност 20% от времето на един епизод.
    const advertising = 0.2 * episodeDuration;
    const episodeDurationPlusAdvertising = episodeDuration + advertising;
    // Всеки сезон завършва със специален епизод, който е с 10м по-дълъг от обичайното.
    const extraTime = seasonsCount * 10;
    // Времето, необходимо за изглеждане на всички епизоди, закръглено до най-близкото цяло число надолу.
    const totalTime = Math.floor(episodeDurationPlusAdvertising * episodesCount * seasonsCount + extraTime);

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTime} minutes.`);
}
seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"]);