function requestValidator(input) {

    'use strict';
    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^([A-z\.\d]+|\*)$/g;
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const specialChars = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!input.hasOwnProperty('method') || !validMethod.includes(input.method)) {
        throw new Error('Invalid request header: Invalid Method');
    };

    if (!input.hasOwnProperty('uri') || !uriPattern.test(input.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    };

    if (!input.hasOwnProperty('version') || !validVersion.includes(input.version)) {
        throw new Error('Invalid request header: Invalid Version');
    };

    if (!input.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    };
    for (const char of input.message) {
        if (specialChars.includes(char)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return input;
}
console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));

// console.log(requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));