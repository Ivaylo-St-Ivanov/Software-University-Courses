function matchFullName(names) {

    let regExpLiteral = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/gm;
    let matches = names.match(regExpLiteral);
    console.log(matches.join(' '));
}
matchFullName('Test Testov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov');