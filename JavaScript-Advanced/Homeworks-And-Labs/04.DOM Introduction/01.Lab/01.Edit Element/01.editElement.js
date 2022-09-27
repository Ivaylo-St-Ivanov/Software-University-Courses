function editElement(reference, match, replacer) {

    'use strict';
    const text = reference.textContent;
    const pattern = new RegExp(match, 'g');
    const result = text.replace(pattern, replacer);
    reference.textContent = result;
}
editElement();