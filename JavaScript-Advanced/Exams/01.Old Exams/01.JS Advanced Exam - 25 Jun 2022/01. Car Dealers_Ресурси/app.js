window.addEventListener("load", solve);

function solve() {

  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const originalCost = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');

  document.getElementById('publish').addEventListener('click', publish);

  const tBodyElement = document.getElementById('table-body');
  const carList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');
  let profitResult = 0;

  function publish(e) {
    e.preventDefault();

    const makeInput = make.value;
    const modelInput = model.value;
    const yearInput = year.value;
    const fuelInput = fuel.value;
    const originalCostInput = originalCost.value;
    const sellingPriceInput = sellingPrice.value;
    const difference = Number(sellingPriceInput) - Number(originalCostInput);

    if (!makeInput || !modelInput || !yearInput || !fuelInput || !originalCostInput || !sellingPriceInput || Number(originalCostInput) > Number(sellingPriceInput)) {
      return;
    }

    const tr = document.createElement('tr');
    tr.className = 'row';

    const tdMake = document.createElement('td');
    tdMake.textContent = `${make.value}`;
    tr.appendChild(tdMake);

    const tdModel = document.createElement('td');
    tdModel.textContent = `${model.value}`;
    tr.appendChild(tdModel);

    const tdYear = document.createElement('td');
    tdYear.textContent = `${year.value}`;
    tr.appendChild(tdYear);

    const tdFuel = document.createElement('td');
    tdFuel.textContent = `${fuel.value}`;
    tr.appendChild(tdFuel);

    const tdOriginalCost = document.createElement('td');
    tdOriginalCost.textContent = `${originalCost.value}`;
    tr.appendChild(tdOriginalCost);

    const tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = `${sellingPrice.value}`;
    tr.appendChild(tdSellingPrice);

    const tdBtn = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);
    tdBtn.appendChild(editBtn);

    const sellBtn = document.createElement('button');
    sellBtn.className = 'action-btn sell';
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sell);
    tdBtn.appendChild(sellBtn);

    tr.appendChild(tdBtn);
    tBodyElement.appendChild(tr);

    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingPrice.value = '';

    function edit() {
      make.value = makeInput;
      model.value = modelInput;
      year.value = yearInput;
      fuel.value = fuelInput;
      originalCost.value = originalCostInput;
      sellingPrice.value = sellingPriceInput;

      tr.remove();
    }

    function sell() {

      const li = document.createElement('li');
      li.className = 'each-list';

      const spanMM = document.createElement('span');
      spanMM.textContent = `${makeInput} ${modelInput}`;
      li.appendChild(spanMM);

      const spanYear = document.createElement('span');
      spanYear.textContent = `${yearInput}`;
      li.appendChild(spanYear);

      const spanSell = document.createElement('span');
      spanSell.textContent = `${difference}`;
      li.appendChild(spanSell);

      carList.appendChild(li);

      profitResult += difference;
      profit.textContent = `${profitResult.toFixed(2)}`;

      tr.remove();
    }
  }
}
