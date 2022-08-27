function perfectNumber(number) {

    function divisors(num) {
        let validDivisors = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                validDivisors += i;
            }
        }
        return validDivisors;
    }

    function perfect(num) {
        let isPerfect = false;
        if (sumDivisors === num) {
            isPerfect = true;
        }
        return isPerfect;
    }

    let sumDivisors = divisors(number);
    let result = perfect(number);
    if (result) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(28);