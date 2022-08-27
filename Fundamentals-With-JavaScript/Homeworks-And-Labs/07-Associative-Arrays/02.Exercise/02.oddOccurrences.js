function oddOccurrences(input) {

    let inputCopy = input.slice(0);
    let listOfElements = inputCopy.toLowerCase().split(' ');
    let result = new Map();

    for (const element of listOfElements) {
        if (!result.has(element)) {
            result.set(element, 0);
        }
        result.set(element, result.get(element) + 1);
    }

    let filtered = Array.from(result).filter(([element, value]) => {
        return value % 2 !== 0;
    });
    let printLine = '';
    for (const element of filtered) {
        printLine += `${element[0]} `;
    }
    console.log(printLine.trim());
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');