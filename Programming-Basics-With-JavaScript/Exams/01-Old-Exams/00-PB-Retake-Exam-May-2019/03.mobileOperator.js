function mobileOperator(input) {

    const oneSmallPrice = 9.98;
    const oneMiddlePrice = 18.99;
    const oneLargePrice = 25.98;
    const oneExtraLargePrice =35.99;
    const twoSmallPrice = 8.58;
    const twoMiddlePrice = 17.09;
    const twoLargePrice = 23.59;
    const twoExtraLargePrice = 31.79;

    const term = input[0];
    const type = input[1];
    const internet = input[2];
    const monthCount = Number(input[3]);

    let sum;

    if (term == 'one') {
        switch (type) {
            case 'Small': sum = oneSmallPrice; break;
            case 'Middle': sum = oneMiddlePrice; break;
            case 'Large': sum = oneLargePrice; break;
            case 'ExtraLarge': sum = oneExtraLargePrice; break;
        }      
    } else if (term == 'two') {
        switch (type) {
            case 'Small': sum = twoSmallPrice; break;
            case 'Middle': sum = twoMiddlePrice; break;
            case 'Large': sum = twoLargePrice; break;
            case 'ExtraLarge': sum = twoExtraLargePrice; break;
        }
    }

    // • при добавен мобилен интернет, към таксата за един месец се добавя:
    //     o при такса по-малка или равна на 10.00 лв.  5.50 лв.
    //     o при такса по-малка или равна на 30.00 лв.  4.35 лв.
    //     o при такса по-голяма от 30.00 лв.  3.85 лв.

    if (internet == 'yes') {
        if (sum <= 10) {
            sum += 5.50; 
        } else if (sum <= 30) {
            sum += 4.35;
        } else {
            sum += 3.85;
        }
    }

    sum *= monthCount;

    // • ако договорът e за две години, общата сума се намалява с 3.75%
    
    if (term == 'two') {
        const discount = sum * (3.75 / 100);
        sum -= discount;
    }

    console.log(sum.toFixed(2) + ' lv.');
}

mobileOperator(['two',
    'Large',
    'no',
    '10']);