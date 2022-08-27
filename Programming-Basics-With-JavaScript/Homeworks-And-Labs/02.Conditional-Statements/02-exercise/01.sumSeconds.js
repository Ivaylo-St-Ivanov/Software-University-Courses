function sumSeconds(input) {

    const firstTime = Number(input[0]);
    const secondTime = Number(input[1]);
    const thirdTime = Number(input[2]);

    const sumSeconds = firstTime + secondTime + thirdTime;
    const min = Math.floor(sumSeconds / 60);
    const sec = sumSeconds % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }

}
sumSeconds(["14", "12", "10"]);