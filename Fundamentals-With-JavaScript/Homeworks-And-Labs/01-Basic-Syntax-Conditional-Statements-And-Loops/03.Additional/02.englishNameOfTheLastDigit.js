function englishNameOfTheLastDigit(num) {

    let result = function (num) {
        let numAsString = String(num);
        let lastDigit = numAsString[numAsString.length - 1];

        switch (lastDigit) {
            case '0': return 'zero';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
        }
    }

    console.log(result(num));
}
englishNameOfTheLastDigit(1643);