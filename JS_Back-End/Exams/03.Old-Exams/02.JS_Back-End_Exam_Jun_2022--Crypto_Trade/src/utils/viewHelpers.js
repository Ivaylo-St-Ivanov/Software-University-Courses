exports.getPaymentOptions = function (payment) {
    const title = [
        'crypto-wallet',
        'credit-card',
        'debit-card',
        'paypal'
    ];

    const options = title.map((title) => ({
        title: title,
        selected: payment == title
    }));

    return options;
};