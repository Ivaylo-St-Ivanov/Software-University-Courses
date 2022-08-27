function echoType(text) {

    console.log(typeof (text));
    if (typeof (text) === 'string' || typeof (text) === 'number') {
        console.log(text);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType(18);