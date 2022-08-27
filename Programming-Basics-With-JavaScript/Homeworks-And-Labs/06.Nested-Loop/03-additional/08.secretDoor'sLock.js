function secretDoorsLock(input) {

    const firstNumUpperLimit = Number(input[0]);
    const secondNumUpperLimit = Number(input[1]);
    const thirdNumUpperLimit = Number(input[2]);

    for (let i = 2; i <= firstNumUpperLimit; i += 2) {
        for (let j = 2; j <= secondNumUpperLimit; j++) {
            for (let k = 2; k <= thirdNumUpperLimit; k += 2) {
                if (j == 2 || j == 3 || j == 5 || j == 7) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}
secretDoorsLock(["8", "2", "8"]);