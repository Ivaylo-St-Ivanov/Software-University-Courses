function NxNMatrix(num) {

    function row(n) {
       let printLineArray = [];
       for (let i = 1; i <= n; i++) {
           printLineArray.push(n);  
       }
       return printLineArray.join(' ');
    }

    function rowsCount(n) {
        let printRows = '';
        for (let i = 1; i <= n; i++) {
            printRows += rowLine + '\n';
        }
        return printRows;
    }

    let rowLine = row(num);
    let result = rowsCount(num);
    console.log(result);
}
NxNMatrix(3);