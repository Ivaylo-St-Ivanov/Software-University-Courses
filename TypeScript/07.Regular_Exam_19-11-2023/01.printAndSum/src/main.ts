function printAndSum(startNum:number, endNum: number): void {

    const printLine: string[] = [];
    let sum: number = 0;

    for (let i = startNum; i <= endNum; i++) {
        printLine.push(String(i));
        sum += i;
    }
    
    console.log(printLine.join(' '));
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);