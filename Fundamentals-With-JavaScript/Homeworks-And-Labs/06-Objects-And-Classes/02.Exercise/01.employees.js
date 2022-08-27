function employees(data) {

    let listOfEmployees = {};
    for (let employee of data) {
        listOfEmployees.name = employee;
        listOfEmployees.personalNumber = employee.length;

        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`);
    }
}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);