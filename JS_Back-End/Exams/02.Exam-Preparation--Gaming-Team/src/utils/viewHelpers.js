exports.getPlatformOptions = function (platform) {
    const title = [
        'PC',
        'Nintendo',
        'PS4',
        'PS5',
        'XBOX',
    ];

    const options = title.map((title) => ({
        title: title,
        selected: platform == title
    }));

    return options;
};