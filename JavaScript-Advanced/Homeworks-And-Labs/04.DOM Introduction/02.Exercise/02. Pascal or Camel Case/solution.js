function solve() {

  'use strict';
  const input = document.getElementById('text').value;
  const inputCase = document.getElementById('naming-convention').value;
  const textArray = input.split(' ');
  let result = '';

  if (inputCase != 'Camel Case' && inputCase != 'Pascal Case') {
    result = 'Error!';
  } else {
    for (let word of textArray) {
      word = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      result += word;
    }
  }
  if (inputCase == 'Camel Case') {
    result = result.replace(result[0], result[0].toLowerCase());
  }

  document.getElementById('result').textContent = result;
}