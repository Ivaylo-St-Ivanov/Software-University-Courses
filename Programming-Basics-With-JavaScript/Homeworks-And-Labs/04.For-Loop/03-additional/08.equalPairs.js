function equalPairs(input) {

    const coupleCount = Number(input[0]);
    let index = 1;

    let currentCoupleValue = 0;
    let lastCoupleValue = 0;
    let currentDifference = 0;
    let maxDifference = 0;
    let isHaveDifference = false;

    for (let i = 1; i <= coupleCount; i++) {
        let currentNum1 = Number(input[index++]);
        let currentNum2 = Number(input[index++]);
        currentCoupleValue = currentNum1 + currentNum2;
        if (index <= 3) {
            lastCoupleValue = currentCoupleValue;
        } else if (currentCoupleValue !== lastCoupleValue) {
            isHaveDifference = true;
            currentDifference = Math.abs(currentCoupleValue - lastCoupleValue);
            lastCoupleValue = currentCoupleValue;
            if (currentDifference > maxDifference) {
                maxDifference = currentDifference;
            }
        } else {
            lastCoupleValue = currentCoupleValue;
        }
    }

    if (isHaveDifference) {
        console.log(`No, maxdiff=${maxDifference}`);
    } else {
        console.log(`Yes, value=${lastCoupleValue}`);
    }
}
equalPairs(["2", "-1", "2", "0", "-1"]);