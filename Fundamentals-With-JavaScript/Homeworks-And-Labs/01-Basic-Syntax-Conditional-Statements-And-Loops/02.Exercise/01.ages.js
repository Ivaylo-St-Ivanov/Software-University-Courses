function ages(age) {

    // • 0-2 (age) – is a baby;
    // • 3-13 (age) – is a child;
    // • 14-19 (age) – is a teenager;
    // • 20-65 (age) – is an adult;
    // • >=66 (age) – is an elder;
    // • In all other cases print – "out of bounds";

    if (age > 65) {
        console.log('elder');
    } else if (age > 19) {
        console.log('adult');
    } else if (age > 13) {
        console.log('teenager');
    } else if (age > 2) {
        console.log('child');
    } else if (age >= 0) {
        console.log('baby');
    } else {
        console.log('out of bounds');
    }
}
ages(38);