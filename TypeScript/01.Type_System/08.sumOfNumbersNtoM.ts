function sumOfNumbersNtoM(n: string, m: string): void {
    let result: number = 0;

    for (let i = Number(n); i <= Number(m); i++) {
        result += i;
    }

    console.log(result);
}

sumOfNumbersNtoM('-8', '20');