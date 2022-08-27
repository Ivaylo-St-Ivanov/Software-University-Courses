function loadingBar(num) {

    function loading(completePercent) {
        let completed = '%'.repeat(completePercent / 10);
        let incompleted = '.'.repeat(10 - completed.length);
        let result = `[${completed}${incompleted}]`;
        return result;
    }

    let isCompleted = function (completePercent) {
        isFinished = false;
        if (completePercent === 100) {
            isFinished = true;
        }
        return isFinished;
    }

    let loadingPercentage = loading(num);
    let result = isCompleted(num);
    if (result) {
        console.log('100% Complete!');
        console.log(loadingPercentage);
    } else {
        console.log(`${num}% ${loadingPercentage}`);
        console.log('Still loading...');
    }
}
loadingBar(100);