function depositCalculator(input) {

    const depositedAmount = Number(input[0]);
    const term = Number(input[1]);
    const annualInterestRate = Number(input[2]);

    const amountPerMonth = depositedAmount * (annualInterestRate / 100) / 12;
    const totalSum = depositedAmount + term * amountPerMonth;
    console.log(totalSum);

}
depositCalculator(["2350", "6", "7"]);