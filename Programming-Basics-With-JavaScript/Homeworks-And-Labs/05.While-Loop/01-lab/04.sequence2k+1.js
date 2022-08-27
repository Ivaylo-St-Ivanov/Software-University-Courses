function sequence2kPlus1(input) {

    const num = Number(input[0]);
    let currentNum = 1;

    while (currentNum <= num) {
        console.log(currentNum);
        currentNum = currentNum * 2 + 1;
    }
}
sequence2kPlus1(["8"]);