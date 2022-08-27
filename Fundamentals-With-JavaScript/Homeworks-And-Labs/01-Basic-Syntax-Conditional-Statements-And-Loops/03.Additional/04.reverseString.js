function reverseString(string) {

    let array = string.split('');
    let reversed = array.reverse();
    console.log(reversed.join(''));
}
reverseString('SoftUni');