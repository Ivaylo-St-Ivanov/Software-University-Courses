function encodeAndDecodeMessages() {

    'use strict';
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);
    let message = document.querySelectorAll('textarea')[1];

    function encode(e) {
        let encodeText = '';
        let input = e.target.parentElement.children[1];
        for (const char of input.value) {
            encodeText += String.fromCharCode(char.charCodeAt() + 1);
        }
        message.value = encodeText;
        input.value = '';
    }

    function decode(e) {
        let decodeText = '';
        let input = e.target.parentElement.children[1].value;
        for (const char of input) {
            decodeText += String.fromCharCode(char.charCodeAt() - 1);
        }
        message.value = decodeText;
    }
}