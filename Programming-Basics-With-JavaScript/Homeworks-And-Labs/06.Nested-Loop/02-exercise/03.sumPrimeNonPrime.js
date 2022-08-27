function sumPrimeNonPrime(input) {

    let index = 0;
    let current = input[index++]

    let sumOfAllPrime = 0;
    let sumOfAllNonPrime = 0;

    while (current !== "stop") {
        let currentNum = Number(current);
        if (currentNum < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;
            for (let i = 2; i <= currentNum - 1; i++) {
                if (currentNum % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                sumOfAllPrime += currentNum;
            } else {
                sumOfAllNonPrime += currentNum;
            }
        }

        current = input[index++];
    }

    console.log(`Sum of all prime numbers is: ${sumOfAllPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfAllNonPrime}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);