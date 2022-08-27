function lastKNumbersSequance(n, k) {

    let sequanceArray = [1];

    for (let i = 2; i <= n; i++) {
        let sumK = 0;
        if (sequanceArray.length - 1 < k || sequanceArray.length === k) {
            for (let element of sequanceArray) {
                sumK += Number(element);
            }
        } else {
            let elements = sequanceArray.slice(-k);
            for (let element of elements) {
                sumK += Number(element);
            }
        }
        sequanceArray.push(sumK);
    }

    let result = sequanceArray.join(' ');
    return result;
}
console.log(lastKNumbersSequance(8, 2));