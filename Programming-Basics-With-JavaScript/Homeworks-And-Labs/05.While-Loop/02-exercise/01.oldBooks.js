function oldBooks(input) {

    const searchedBook = input[0];
    let index = 1;

    let current = input[index++];
    let bookCounter = 0;
    let bookIsFound = false;

    while (current !== "No More Books") {
        if (current === searchedBook) {
            bookIsFound = true;
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        
        bookCounter += 1;
        current = input[index++];
    }

    if (!bookIsFound) {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);