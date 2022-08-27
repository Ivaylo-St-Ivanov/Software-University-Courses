function cutAndReverse(string) {

    let cutIndex = string.length / 2;
    let firstHalf = string.substring(0, cutIndex);
    let secondHalf = string.substring(cutIndex, string.length);
    let reversedFirstHalf = '';
    let reversedSecondHalf = '';
    for (let i = firstHalf.length - 1; i >= 0; i--) {
        reversedFirstHalf += firstHalf[i];
    }
    for (let i = secondHalf.length - 1; i >= 0; i--) {
        reversedSecondHalf += secondHalf[i];
    }

    console.log(reversedFirstHalf);
    console.log(reversedSecondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');