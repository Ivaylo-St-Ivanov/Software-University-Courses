function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {
        let isPalindrome = false;
        let currentNum = array[i];
        let reversedCurrentNum = Number(currentNum.toString().split('').reverse().join(''));
        if (reversedCurrentNum === currentNum) {
            isPalindrome = true;
        }
        console.log(isPalindrome)
    }
}
palindromeIntegers([32, 2, 232, 1010]);