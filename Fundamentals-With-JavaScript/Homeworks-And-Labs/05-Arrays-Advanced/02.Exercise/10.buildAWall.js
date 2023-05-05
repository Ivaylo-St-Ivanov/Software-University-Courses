function buildAWall(input) {

    const concrete = [];

    while(input.length > 0) {
        let concretePerDay = 0;

        for (let i = 0; i < input.length; i++) {
            let currentWall = Number(input[i]);
            const index = input.indexOf(input[i]);

            if (currentWall < 30) {
                const newHeight = currentWall + 1;
                input.splice(index, 1, newHeight);
                concretePerDay += 195;
            } else {
                input.splice(index, 1);
                i -= 1;
            }
        }
        concrete.push(concretePerDay);
    }
    concrete.pop();

    // One cubic yard of concrete costs 1900 pesos. 
    const concretePrice = 1900;

    let result = '';
    let totalSum = 0;

    for (const current of concrete) {
        result += current + ', ';
        totalSum += Number(current) * concretePrice;
    }

    console.log(result.slice(0, result.length - 2));
    console.log(totalSum + ' pesos');
}

buildAWall(['17', '22', '17', '19', '17']);