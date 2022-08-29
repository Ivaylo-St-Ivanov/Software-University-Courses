function addAndRemove(input) {

    let initialNum = 0;
    let collection = [];

    for (const current of input) {
        initialNum++;
        switch (current) {
            case 'add': collection.push(initialNum); break;
            case 'remove': collection.pop(); break;
        }
    }

    if (collection.length > 0) {
        console.log(collection.join(' '));
    } else {
        console.log('Empty');
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);