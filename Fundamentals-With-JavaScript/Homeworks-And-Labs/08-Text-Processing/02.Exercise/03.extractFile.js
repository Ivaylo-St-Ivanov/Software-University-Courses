function extractFile(string) {

    let elements = string.split('\\');
    let subtractLastEement = elements[elements.length - 1].split('.');
    let extension = subtractLastEement.pop();
    let fileName = subtractLastEement.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');