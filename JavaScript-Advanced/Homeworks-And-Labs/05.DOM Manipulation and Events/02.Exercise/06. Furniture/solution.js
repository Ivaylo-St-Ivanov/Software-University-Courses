function solve() {

  'use strict';
  const buttons = document.querySelectorAll('button');
  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);
  const ref = document.querySelectorAll('#exercise textarea');

  function generate() {
    const input = JSON.parse(ref[0].value);

    for (const furniture of input) {
      const row = document.createElement('tr');

      const tdImage = document.createElement('td');
      const image = document.createElement('img');
      image.src = furniture.img;
      tdImage.appendChild(image);
      row.appendChild(tdImage);

      const tdName = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = furniture.name;
      tdName.appendChild(pName);
      row.appendChild(tdName);

      const tdPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = furniture.price;
      tdPrice.appendChild(pPrice);
      row.appendChild(tdPrice);

      const tdDecFactor = document.createElement('td');
      const pDecFactor = document.createElement('p');
      pDecFactor.textContent = furniture.decFactor;
      tdDecFactor.appendChild(pDecFactor);
      row.appendChild(tdDecFactor);

      const tdMark = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      tdMark.appendChild(checkbox);
      row.appendChild(tdMark);

      document.querySelector('tbody').appendChild(row);
    }
  }

  function buy() {
    const rows = [...document.querySelectorAll('input[type=checkbox]')];

    let checkedBoxes = rows.filter(row => row.checked).map(box => box.parentElement.parentElement);

    let product = [];
    let price = 0;
    let decFactor = 0;
    const checkedBoxesLength = checkedBoxes.length;

    for (let i = 0; i < checkedBoxesLength; i++) {
      product.push(checkedBoxes[i].children[1].textContent);
      price += Number(checkedBoxes[i].children[2].textContent);
      decFactor += Number(checkedBoxes[i].children[3].textContent);
    }

    const output = ref[1];
    output.textContent = `Bought furniture: ${product.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${decFactor / checkedBoxesLength}`;
  }
}