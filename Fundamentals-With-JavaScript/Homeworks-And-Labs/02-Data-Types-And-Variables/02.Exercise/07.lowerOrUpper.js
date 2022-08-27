function lowerOrUpper(char) {

    result = '';
    char === char.toUpperCase() ? result = 'upper-case' : result = 'lower-case';
    console.log(result);
}
lowerOrUpper('i');