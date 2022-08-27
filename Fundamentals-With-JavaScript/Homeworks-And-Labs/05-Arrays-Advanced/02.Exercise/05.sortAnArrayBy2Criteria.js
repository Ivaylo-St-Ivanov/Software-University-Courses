function sortAnArrayBy2Criteria(array) {

    let copyArray = array.slice(0);
    copyArray.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(copyArray.join('\n'));
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);