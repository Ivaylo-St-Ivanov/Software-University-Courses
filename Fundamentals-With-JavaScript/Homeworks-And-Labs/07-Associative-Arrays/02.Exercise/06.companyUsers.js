function companyUsers(input) {

    let companyInfo = {};

    for (const current of input) {
        let [company, employeeID] = current.split(' -> ');
        if (companyInfo.hasOwnProperty(company) === false) {
            companyInfo[company] = new Set();
        }
        companyInfo[company].add(employeeID);
    }

    let sortedCompany = Object.entries(companyInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, employeeID] of sortedCompany) {
        let employees = Array.from(employeeID);
        let printLine = '';
        for (const employee of employees) {
            printLine += `-- ${employee}\n`;
        }

        console.log(`${company}\n${printLine.trim()}`);
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);