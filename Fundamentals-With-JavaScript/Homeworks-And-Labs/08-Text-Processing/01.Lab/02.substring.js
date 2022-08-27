function substring(string, startIndex, count) {

    let result = string.substring(startIndex, string.length).substring(0, count);
    console.log(result);
}
substring('SkipWord', 4, 7);