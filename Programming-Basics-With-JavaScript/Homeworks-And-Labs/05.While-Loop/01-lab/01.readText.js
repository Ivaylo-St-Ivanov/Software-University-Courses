function readText(input) {

    let index = 0;
    let element = input[index];
    index++;

    while (element !== "Stop") {
        console.log(element);
        element = input[index];
        index++;
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);