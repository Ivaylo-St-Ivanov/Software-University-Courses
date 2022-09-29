function solve() {

  'use strict';
  const input = document.getElementById('input').value.split('.');
  let counter = 0;
  let currentParagraph = '';

  for (const sentence of input) {
    if (sentence.length > 0) {
      counter++;
      currentParagraph += sentence + '.';
    }
    if (counter == 3) {
      document.getElementById('output').innerHTML += `<p>${currentParagraph}</p>`;
      counter = 0;
      currentParagraph = '';
    }
  }
  if (currentParagraph != '') {
    document.getElementById('output').innerHTML += `<p>${currentParagraph}</p>`;
  }
}