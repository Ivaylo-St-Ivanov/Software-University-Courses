function passwordValidator(pass) {

    // • The length should be 6 - 10 characters (inclusive)
    function isLengthEnough(stringPass) {
        return stringPass.length > 5 && stringPass.length < 11;
    }

    // • It should consist only of letters and digits
    function isHavingOnlyLettersAndDigits(stringPass) {
        for (let currentCharIndex of stringPass) {
            let currentChar = currentCharIndex.charCodeAt(0);
            if (!(currentChar >= 48 && currentChar <= 57) &&
                !(currentChar >= 65 && currentChar <= 90) &&
                !(currentChar >= 97 && currentChar <= 122)) {
                return false;
            }
        }
        return true;
    }

    // • It should have at least 2 digits
    function isHavingAtLeastTwoDigits(stringPass) {
        let count = 0;
        for (let currentCharIndex of stringPass) {
            let currentChar = currentCharIndex.charCodeAt(0);
            if (currentChar >= 48 && currentChar <= 57) {
                count++;
            }
        }
        return count >= 2;
    }

    let isValidLength = isLengthEnough(pass);
    let isValidLettersandDigits = isHavingOnlyLettersAndDigits(pass);
    let isValidAtLeastTwoDigit = isHavingAtLeastTwoDigits(pass);

    if (isValidLength && isValidLettersandDigits && isValidAtLeastTwoDigit) {
        console.log('Password is valid');
    }
    if (!isValidLength) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isValidLettersandDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isValidAtLeastTwoDigit) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('MyPass123');